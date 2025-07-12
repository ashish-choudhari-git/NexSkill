'use client';
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const mockUser = {
  name: "Marc Demo",
  profilePhoto: "/file.svg",
  skillsOffered: ["Web Design", "UI/UX", "React"],
  skillsWanted: ["Python", "Data Science"],
  rating: 3.8,
  feedback: [
    { user: "Alice", comment: "Great collaborator!" },
    { user: "Bob", comment: "Very helpful and skilled." },
  ],
};

const UserProfileCard = ({ user = mockUser }) => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-10 bg-gray-50">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Panel: Profile */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src={user.profilePhoto}
            alt="Profile"
            className="w-28 h-28 rounded-full border object-cover shadow-md"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-sm text-yellow-600 font-medium">⭐ {user.rating} / 5</p>
          </div>
          <Button
            variant="default"
            className="mt-4 w-full md:w-auto"
            onClick={() => router.push("/skill-swap-request")}
          >
            Request Swap
          </Button>
        </div>
        {/* Right Panel: Skills & Feedback */}
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Skills Offered */}
            <div>
              <h2 className="text-lg font-semibold text-indigo-600 mb-2">Skills Offered</h2>
              <div className="flex flex-wrap gap-2">
                {user.skillsOffered.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Skills Wanted */}
            <div>
              <h2 className="text-lg font-semibold text-pink-600 mb-2">Skills Wanted</h2>
              <div className="flex flex-wrap gap-2">
                {user.skillsWanted.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Feedback */}
          <div>
            <h2 className="text-lg font-semibold text-slate-600 mb-3">
              Rating & Feedback
            </h2>
            <div className="space-y-3">
              {user.feedback.map((fb, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 border rounded-lg px-4 py-2 text-gray-700"
                >
                  <strong>{fb.user}</strong>: {fb.comment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
