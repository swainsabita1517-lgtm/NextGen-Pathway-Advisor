import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("https://nextgen-backend.onrender.com/results/my")
      .then(res => setResults(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="dashboard-title">Dashboard</h2>
      </div>

      <div className="main-content">
        <h3>Previous Results</h3>

        {results.length > 0 ? (
          results.map((r, i) => (
            <div key={i} className="content-box">
              {r.career}
            </div>
          ))
        ) : (
          <p>No previous results yet.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;