import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to NextGen Pathway Advisor</h1>
      <p>
        NextGen Pathway Advisor is an intelligent career guidance system
        designed to help students choose the best career path based on their
        interests, skills, and academic performance.
      </p>

      <h3>✨ Key Features:</h3>
      <ul>
        <li>AI-based Career Prediction</li>
        <li>Skill Assessment Test</li>
        <li>Personalized Dashboard</li>
        <li>Career Insights and Recommendations</li>
      </ul>

      <h3>🎯 Our Goal:</h3>
      <p>
        To guide students towards the right career path using Machine Learning
        and Data Science techniques.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
  },
};

export default Home;