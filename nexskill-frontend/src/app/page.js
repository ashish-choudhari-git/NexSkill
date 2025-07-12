"use client"
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext";
import Auth from "./pages/authentication";

export default function Home() {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}
