"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mockRequests = [
  {
    id: 1,
    name: "Marc Demo",
    profilePhoto: "/file.svg",
    rating: 3.9,
    skillOffered: "JavaScript",
    skillWanted: "Python",
    status: "Pending",
  },
  {
    id: 2,
    name: "Jane Smith",
    profilePhoto: "/file.svg",
    rating: 3.9,
    skillOffered: "React",
    skillWanted: "Next.js",
    status: "Rejected",
  },
];

const statusOptions = ["All", "Pending", "Accepted", "Rejected"];

export default function SwapRequests() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Filter and search logic
  const filteredRequests = mockRequests.filter(
    (req) =>
      (statusFilter === "All" || req.status === statusFilter) &&
      (req.name.toLowerCase().includes(search.toLowerCase()) ||
        req.skillOffered.toLowerCase().includes(search.toLowerCase()) ||
        req.skillWanted.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 flex justify-center items-start py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-8"
        >
          {/* Top Filters */}
          <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Skill Swap Requests
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
              <select
                className="border rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="border rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Search by name or skill"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Request Cards */}
          <div className="space-y-6">
            {filteredRequests.length === 0 ? (
              <div className="text-center text-gray-400 py-10">
                No matching requests found.
              </div>
            ) : (
              filteredRequests.map((req) => (
                <motion.div
                  key={req.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="border border-gray-100 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm"
                >
                  {/* Profile Info */}
                  <div className="flex flex-col items-center md:items-start gap-2 md:w-48 text-center md:text-left">
                    <img
                      src={req.profilePhoto}
                      alt="Profile"
                      className="w-16 h-16 rounded-full border object-cover bg-gray-100 shadow"
                    />
                    <div className="text-sm text-gray-500">
                      Rating: {req.rating}/5
                    </div>
                  </div>

                  {/* Skills & Name */}
                  <div className="flex-1 space-y-2">
                    <div className="font-semibold text-lg text-gray-800">
                      {req.name}
                    </div>
                    <div className="text-sm flex gap-2 flex-wrap">
                      <span className="text-green-700 font-medium">
                        Skill Offered ⇒
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
                        {req.skillOffered}
                      </span>
                    </div>
                    <div className="text-sm flex gap-2 flex-wrap">
                      <span className="text-blue-700 font-medium">
                        Skill Wanted ⇒
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                        {req.skillWanted}
                      </span>
                    </div>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex flex-col items-center gap-2 min-w-[120px]">
                    <span
                      className={`text-sm font-semibold ${
                        req.status === "Pending"
                          ? "text-yellow-600"
                          : req.status === "Accepted"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      Status: {req.status}
                    </span>

                    {req.status === "Pending" && (
                      <div className="flex gap-2">
                        <button className="text-green-600 hover:underline font-medium text-sm transition">
                          Accept
                        </button>
                        <button className="text-red-600 hover:underline font-medium text-sm transition">
                          Reject
                        </button>
                      </div>
                    )}

                    {req.status === "Accepted" && (
                      <span className="text-green-600 font-semibold">
                        Accepted
                      </span>
                    )}

                    {req.status === "Rejected" && (
                      <span className="text-red-600 font-semibold">
                        Rejected
                      </span>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-3 pt-6">
            <button
              className="px-2 py-1 text-gray-500 hover:text-indigo-600 disabled:opacity-50"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              &lt;
            </button>
            <span className="text-gray-700 font-semibold">{page}</span>
            <button
              className="px-2 py-1 text-gray-500 hover:text-indigo-600 disabled:opacity-50"
              onClick={() => setPage((prev) => prev + 1)}
              disabled
            >
              &gt;
            </button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
