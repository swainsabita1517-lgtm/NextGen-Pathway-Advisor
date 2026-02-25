import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const career = location.state?.career || "Not Available";

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Career Assessment Result</h2>

      <div
        style={{
          marginTop: "30px",
          padding: "30px",
          background: "#f4f6f9",
          borderRadius: "10px",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <h3>Your Recommended Career:</h3>
        <h1 style={{ color: "#4caf50" }}>{career}</h1>
      </div>

      <button
        style={{ marginTop: "20px" }}
        onClick={() => navigate("/")}
      >
        Take Assessment Again
      </button>
    </div>
  );
}

export default Result;