import React from "react";
import {
  FaHandshake,
  FaExchangeAlt,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const features = [
   {
    icon: <FaHandshake />,
    title: "Skill Matching",
    description:
      "Easily find users who are offering the skills you need and request an exchange.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Two-Way Swapping",
    description:
      "List your skills and request others in return with a fair and collaborative system.",
  },
  {
    icon: <FaUsers />,
    title: "Community-Driven",
    description:
      "Join a growing network of learners and teachers exchanging value with each other.",
  },
  {
    icon: <FaChartLine />,
    title: "Track Your Growth",
    description:
      "View your swap history, feedback, and skill progress through your dashboard.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-transparent text-black px-6 mb-">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose NexSkill ?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
