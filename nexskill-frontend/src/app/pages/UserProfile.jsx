import React from "react";
import UserProfileCard from "@/components/ui/UserProfileCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UserProfile() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <UserProfileCard />
      </main>
      <Footer />
    </>
  );
}
