import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./pages/About";
import Assessment from "./pages/Assessment";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard"; 
import Result from "./components/Result";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Header />
      <img src="/logo.png" alt="logo" className="logo" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
        <Route path="/result" element={<Result />} />
        

        {/* ✅ ADD THIS ROUTE */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;