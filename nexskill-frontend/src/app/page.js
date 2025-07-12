"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./pages/authentication";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserProfileForm from "./pages/UserProfileForm";
import UserProfile from "./pages/UserProfile";
import SkillSwapRequest from "./pages/SkillSwapRequest";
import SwapRequests from "./pages/SwapRequests";
export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/skillswaprequest" element={<SkillSwapRequest />} />
        <Route path="/swaprequest" element={<SwapRequests />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/profile" element={<UserProfileForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
