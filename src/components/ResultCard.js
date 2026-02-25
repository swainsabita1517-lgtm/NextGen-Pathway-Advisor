import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

function ResultCard({ result, scores }) {
  const total = Object.values(scores).reduce((a, b) => a + b, 0);

  const data = {
    labels: Object.keys(scores),
    datasets: [
      {
        data: Object.values(scores),
      },
    ],
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Your Recommended Career:</h2>
      <h1>{result}</h1>

      <Pie data={data} />
    </div>
  );
}

export default ResultCard;