import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://nextgen-backend.onrender.com/register", {
        email,
        password,
      });

      alert(res.data.message);
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Register</h1>

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button className="login-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;