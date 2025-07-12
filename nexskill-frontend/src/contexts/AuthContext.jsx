import axios from "axios";
import httpStatus from "http-status";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "@/environment";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase"; // adjust path
// import { showSuccessToast, showErrorToast } from "../utils/toastHelpers";

export const AuthContext = createContext({});

const client = axios.create({
  // baseURL: "http://localhost:4000/api/v1/users",
  baseURL: `${server}/api/v1/users`,
});

export const AuthProvider = ({ children }) => {
  const authContext = useContext(AuthContext);

  // const [userData, setUserData] = useState(authContext);
  const [userData, setUserData] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const router = useNavigate();

  // Handle Google Login using firebase
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Optional: Send user info to backend to generate JWT token (if needed)
      const response = await client.post("/google-login", {
        email: user.email,
        name: user.displayName,
        uid: user.uid,
      });

      if (response.status === httpStatus.OK) {
        // console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setUserData(response.data.user); // assuming backend returns user info
        showSuccessToast("Login successful!");
        setTimeout(() => {
          router("/");
        }, 800);
      }
    } catch (error) {
      console.error("Google login failed:", error);
      showErrorToast("Something went wrong");
      throw error;
    }
  };

  const handleRegister = async (name, username, password) => {
    try {
      let request = await client.post("/register", {
        name: name,
        username: username,
        password: password,
      });

      if (request.status === httpStatus.CREATED) {
        router("/login");
        return request.data.message;
      }
    } catch (err) {
      throw err;
    }
  };

  const handleLogin = async (username, password) => {
    try {
      let request = await client.post("/login", {
        username: username,
        password: password,
      });

      if (request.status === httpStatus.OK) {
        setUserData(request.data.user);
        localStorage.setItem("token", request.data.token);
        localStorage.setItem("user", JSON.stringify(request.data.user));
        showSuccessToast("Login successful!");
        setTimeout(() => {
          router("/");
        }, 500);
      }
    } catch (err) {
      throw err;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    localStorage.removeItem("user"); // Remove the user from localStorage
    setUserData(null); // Clear user-related state
    showSuccessToast("Logout successfully!");
    setTimeout(() => {
      router("/login");
    }, 500);
  };

  const getHistoryOfUser = async () => {
    try {
      let request = await client.get("/get_all_activity", {
        params: {
          token: localStorage.getItem("token"),
        },
      });
      // console.log("getHistoryOfUser response:", request.data);
      return request.data;
    } catch (err) {
      throw err;
    }
  };

  const addToUserHistory = async (meetingCode) => {
    try {
      let request = await client.post("/add_to_activity", {
        token: localStorage.getItem("token"),
        meeting_code: meetingCode,
      });
      console.log(request);
      return request;
    } catch (e) {
      throw e;
    }
  };

  const data = {
    userData,
    setUserData,
    addToUserHistory,
    getHistoryOfUser,
    handleGoogleLogin,
    handleRegister,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
