import React, { useState, useContext, useEffect } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import NavUser from "./NavUser";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  // const { handleLogout } = useContext(AuthContext);
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
          NexSkill
        </button>

        {/* ********** Desktop NavLinks ********** */}
        <div className="hidden md:flex items-center gap-6 text-m">
          <>
            {!isLoggedIn && (
              <>
                <button
                  onClick={() => {
                    navigation("/skillswaprequest");
                  }}
                  className="hover:text-blue-700 transition-colors duration-200  border-2 rounded-md border-gray-400 px-2 py-2 me-1"
                >
                  Swap request
                </button>
                <button
                  onClick={() => {
                    navigation("/login");
                  }}
                  className="bg-white hover:bg-black hover:text-white hover:border-white px-3 py-2 border-2 border-gray-400 text-black font-bold rounded-md text-sm transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => navigation("/userprofile")}
                  className="rounded-md px-2 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  Profile
                </button>
              </>
            )}
            {isLoggedIn && (
              <>
                <button
                  onClick={() => {
                    navigation("/swaprequest");
                  }}
                  className="hover:text-blue-700 transition-colors duration-200  border-2 rounded-md border-gray-400 px-2 py-2 me-1"
                >
                  Swap request
                </button>
                <button
                  onClick={() => {
                    navigation("/");
                  }}
                  className="hover:text-blue-700 transition-colors duration-200  border-2 rounded-md border-gray-300 p-2 navLink flex gap-3"
                >
                  Home
                </button>
                <button
                  onClick={() => navigation("/profile")}
                  className="rounded-md px-2 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  Profile
                </button>
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
                  navigation("/swaprequest");
                }}
                className="hover:text-blue-700 transition-colors duration-200  border-2 rounded-md border-gray-400 px-2 py-2 me-1"
              >
                Swap request
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
