"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigation = useNavigate();
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-9xl font-extrabold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Page Not Found!
          </h2>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => {
              navigation("/");
            }}
            className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            Go to Home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
