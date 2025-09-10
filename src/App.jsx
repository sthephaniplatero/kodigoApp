import React from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppNavbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
