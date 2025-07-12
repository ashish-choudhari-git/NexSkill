import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigation = useNavigate();
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-10 text-black">
  {/* Hero Section */}
  <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto gap-12">
    {/* Left - Text Content */}
    <motion.div
      className="flex-1 space-y-6"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Skill Swap Platfrom
      </h1>
      <p className="text-lg md:text-xl text-black/70">
        <strong>NexSkill</strong> is a platform where you can share your talents and learn from others — list what you're good at, request what you want to learn, and grow with the community.
      </p>
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => navigation("/login")}
          className="rounded-md px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Swap Skill
        </button>
        {/* <button
          onClick={() => navigation("/swaprequest")}
          className="rounded-md px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors"
        >
          Explore 
        </button> */}
      </div>
    </motion.div>

    {/* Right - Image */}
    <motion.div
      className="flex-1 flex justify-center"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Skill Sharing"
        className="max-w-[320px] md:max-w-md rounded-xl shadow-xl border border-black/10"
      />
    </motion.div>
  </section>
</div>

  );
}
