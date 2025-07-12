import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigation = useNavigate();
  return (
    <footer className="bg-white/80 text-black py-8 border-t-2 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Apna Video Call</h3>
          <p className="text-black/70">
            Connecting people, one call at a time.
          </p>
          <p>&copy;ApnaVideo 2025</p>
        </div>
        <div className="space-y-2">
          <button
            onClick={() => {
              navigation("/");
            }}
            className="block text-black/70 hover:text-blue-600"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => {
              navigation("/");
            }}
            className="block text-black/70 hover:text-blue-600"
          >
            Terms of Service
          </button>
          <button
            onClick={() => {
              navigation("/");
            }}
            className="block text-black/70 hover:text-blue-600"
          >
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
}
