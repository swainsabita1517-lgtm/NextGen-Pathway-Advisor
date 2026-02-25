import React from "react";
import "./about.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const barData = [
  { name: "Engineering", students: 40 },
  { name: "Medical", students: 25 },
  { name: "IT", students: 20 },
  { name: "Commerce", students: 15 },
];

const pieData = [
  { name: "Logical Skills", value: 35 },
  { name: "Technical Skills", value: 25 },
  { name: "Communication", value: 20 },
  { name: "Creativity", value: 20 },
];

const COLORS = ["#4CAF50", "#2196F3", "#FF9800", "#9C27B0"];

function About() {
  return (
    <div className="about-container">
      
      {/* LEFT SIDE TEXT */}
      <div className="about-text">
        <h1>About NextGen Pathway Advisor</h1>

        <p>
          NextGen Pathway Advisor is an intelligent career guidance system 
          developed using Machine Learning techniques.
        </p>
        <p>
          The platform analyzes student interests, academic performance,
          logical reasoning, creativity, and communication ability.
        </p>
        <p>
          Based on collected inputs, the system predicts the most suitable
          career domain such as Engineering, Medical, IT, or Commerce.
        </p>
        <p>
          It uses classification algorithms to improve prediction accuracy.
        </p>
        <p>
          The goal is to reduce confusion among students while choosing careers.
        </p>
        <p>
          The system processes assessment data and generates personalized reports.
        </p>
        <p>
          Data visualization techniques help users understand their strengths.
        </p>
        <p>
          The backend integrates predictive models trained on synthetic datasets.
        </p>
        <p>
          Students receive clear insights into career pathways aligned with
          their skills and interests.
        </p>
        <p>
          The project demonstrates the practical application of AI in
          education and career counseling.
        </p>
      </div>

      {/* RIGHT SIDE CHARTS */}
      <div className="about-chart">
        <h2>Career Distribution</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="students" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>

        <h2 style={{ marginTop: "40px" }}>Skill Analysis</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={80}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default About;