import React from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function Home() {
  return (
    <div className="container mt-4">
      <h1>Home</h1>
    </div>
  );
}

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
