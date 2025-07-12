"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./pages/authentication";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserProfileForm from "./pages/UserProfileForm";
export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Auth />} />
        {/* <Route path="/swaprequest" element={<SwapRequestForm />} /> */}
        <Route path="/profile" element={<UserProfileForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}