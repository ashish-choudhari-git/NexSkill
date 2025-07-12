import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className=" text-black p-6 bg-white/80 rounded-xl shadow-lg hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="text-3xl mb-4 text-black">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-black/80 text-sm">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
