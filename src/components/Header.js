import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // put logo.png in src/assets/

// ✅ ADD STYLES HERE (outside the function)
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 30px",
    background: "#ffffff",
    boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  navLeft: {
    display: "flex",
    gap: "30px",
  },

  navItem: {
    textDecoration: "none",
    fontSize: "18px",
    color: "#333333",
    fontWeight: "500",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    width: "150px",
    height: "60px",
  },

  heroSection: {
    textAlign: "center",
    padding: "100px 20px",
    background: "#f7f9fc",
  },

  title: {
    fontSize: "62px",
    fontWeight: "800",
    color: "#0d1b2a",
    margin: "0 0 15px",
  },

  subtitle: {
    fontSize: "22px",
    color: "#415a77",
    maxWidth: "900px",
    margin: "0 auto",
  },
};

// ✅ Component starts here
export default function Header() {
  return (
    <>
      <div style={styles.navbar}>
        <div style={styles.navLeft}>
          <Link to="/" style={styles.navItem}>Home</Link>
          <Link to="/about" style={styles.navItem}>About</Link>
          <Link to="/assessment" style={styles.navItem}>Assessment</Link>
          <Link to="/dashboard" style={styles.navItem}>Dashboard</Link>
          <Link to="/login" style={styles.navItem}>Login</Link>
          <Link to="/register" style={styles.navItem}>Register</Link>
        </div>

        <div style={styles.logoContainer}>
        <img src={logo} alt="logo" className="logo" />
        </div>
      </div>

      <div style={styles.heroSection}>
        <h1 style={styles.title}>NextGen Pathway Advisor</h1>
        <p style={styles.subtitle}>
          Intelligent career guidance system to help students choose the best
          career path based on skills & interests.
        </p>
      </div>
    </>
  );
}