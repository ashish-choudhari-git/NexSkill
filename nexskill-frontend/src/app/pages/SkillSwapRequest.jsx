'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// 🟢 Mock props (Replace with actual data in production)
const loggedInUserSkills = ["Web Design", "UI/UX", "React"]; // Your skills
const targetUser = {
  name: "Marc Demo",
  skillsWanted: ["Python", "Data Science"],
};

export default function SkillSwapRequest() {
  const [offered, setOffered] = useState("");
  const [wanted, setWanted] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Swap Request Sent!\nTo: ${targetUser.name}\nYou Offer: ${offered}\nYou Want: ${wanted}\nMessage: ${message}`
    );
    // You can redirect or reset state here
  };

  return (
    <>
    <Navbar/>
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Send Skill Swap Request to{" "}
          <span className="text-indigo-600">{targetUser.name}</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Offered Skill */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Choose one of your offered skills
            </label>
            <select
              className="w-full border rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
              value={offered}
              onChange={(e) => setOffered(e.target.value)}
              required
            >
              <option value="" disabled>
                -- Select Skill --
              </option>
              {loggedInUserSkills.map((skill, idx) => (
                <option key={idx} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>

          {/* Wanted Skill */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Choose one of their wanted skills
            </label>
            <select
              className="w-full border rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
              value={wanted}
              onChange={(e) => setWanted(e.target.value)}
              required
            >
              <option value="" disabled>
                -- Select Skill --
              </option>
              {targetUser.skillsWanted.map((skill, idx) => (
                <option key={idx} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              className="w-full border rounded-lg px-4 py-2 bg-gray-50 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-slate-400 transition duration-200"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a short message..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </main>
    <Footer/>
    </>
  );
}
