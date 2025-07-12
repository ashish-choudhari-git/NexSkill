import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import NavUser from "./NavUser";
import { Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { handleLogout } = useContext(AuthContext);
  const navigation = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  );

  const logoutHandler = () => {
    handleLogout();
    setIsLoggedIn(false); // immediately update UI
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md rounded-2xl navBar bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3">
        {/* Logo */}
        <button
          onClick={() => {
            navigation("/");
          }}
          className="text-3xl font-extrabold flex items-center"
        >
          Apna
          <span className="text-3xl font-extrabold bg-gradient-to-r from-gray-400 to-black text-transparent bg-clip-text ml-1">
            Video
          </span>
        </button>

        {/* ********** Desktop NavLinks ********** */}
        <div className="hidden md:flex items-center gap-6 text-m">
          <>
            {!isLoggedIn && (
              <>
                <button
                  onClick={() => {
                    navigation("/join/joinasguest");
                  }}
                  className="hover:text-blue-700 transition-colors duration-200  border-2 rounded-md border-gray-400 p-2 navLink flex gap-1"
                >
                  <Video />
                  Join as guest
                </button>
                <button
                  onClick={() => {
                    navigation("/login");
                  }}
                  className="bg-white hover:bg-black hover:text-white hover:border-white px-3 py-2 border-2 border-gray-400 text-black font-bold rounded-md text-sm transition-colors duration-200"
                >
                  Login
                </button>
              </>
            )}
            {isLoggedIn && (
              <>
                <button
                  onClick={() => {
                    navigation("/home");
                  }}
                  className="hover:text-blue-700 transition-colors duration-200  border-2 rounded-md border-gray-300 p-2 navLink flex gap-3"
                >
                  <Video />
                  New call
                </button>
                <NavUser />
              </>
            )}
          </>
        </div>

        {/* ********** Mobile NavLinks ********** */}
        <div className="md:hidden">
          {!isLoggedIn && (
            <>
              <button
                onClick={() => {
                  navigation("/join/joinasguest");
                }}
                className="hover:text-blue-700 transition-colors duration-200  border-2 rounded-md border-gray-400 px-2 py-2 me-1"
              >
                {/* <Video /> */}
                Join as guest
              </button>
              <button
                onClick={() => {
                  navigation("/login");
                }}
                className="bg-white hover:bg-black hover:text-white hover:border-white px-2 py-2 border-2 border-gray-500 text-black rounded-md transition-colors duration-200 me-1"
              >
                Login
              </button>
            </>
          )}

          {isLoggedIn && (
            <>
              {/* User Icon */}
              <NavUser styles={{ display: "none" }} />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
