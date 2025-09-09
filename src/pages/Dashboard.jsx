import React from "react";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await auth.signOut();
    navigate("/signin"); 
  };

  return (
    <div className="container mt-4">
      <h1>Dashboard</h1>
      <button className="btn btn-danger" onClick={handleSignOut}>
        Cerrar Sesion
      </button>
    </div>
  );
}

export default Dashboard;
