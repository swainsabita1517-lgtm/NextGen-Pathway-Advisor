import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // make sure logo exists

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoSection}>
        <img src="/logo.png" alt="NextGen Logo"style={{ height: "60px", width: "auto", objectFit: "contain" }}/>
        <h1 style={styles.title}>NextGen Pathway Advisor</h1>
      </div>

      <div style={styles.navLinks}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/login">Login</Link>
        <Link style={styles.link} to="/register">Register</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/assessment">Assessment</Link>
        <Link style={styles.link} to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0a192f",
    padding: "15px 40px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },

  logoSection: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    width: "150px",
    height: "60px",
    marginRight: "15px",
  },

  title: {
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    margin: 0,
  },

  navLinks: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
  },
};

export default Navbar;