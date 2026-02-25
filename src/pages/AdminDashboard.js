import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/admin/results",
        {
          headers: { Authorization: token }
        }
      );

      setResults(res.data);
    };

    fetchResults();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {results.map((r, index) => (
        <div key={index}>
          <p>Name: {r.userId?.name}</p>
          <p>Email: {r.userId?.email}</p>
          <p>Career: {r.predictedCareer}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;