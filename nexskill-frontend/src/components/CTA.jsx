import React from "react";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigation = useNavigate();
  return (
     <section className="text-black py-10 m-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center rounded-lg p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Unlock Opportunities with Skill Swapping
        </h2>
        <p className="mb-8 text-base sm:text-lg max-w-xl mx-auto">
          Offer your talents, discover new skills, and connect with people who want to learn what you know — and teach you what they do best.
        </p>
        <button
          onClick={() => {
            router.push("/home"); // Redirect to skill marketplace or dashboard
          }}
          className="inline-block bg-black text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-900 transition"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
