import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Rutas privadas
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/signin" />;
};

function App() {
  return (
    
      <div className="flex flex-col min-h-screen">
        <AppNavbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Login />} />

            {/* Ruta privada */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard/>
                </PrivateRoute>
              }
            />

            {/* Redirección por defecto */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    
  );
}

export default App;
