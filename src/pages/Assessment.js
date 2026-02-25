import React, { useState } from "react";
import axios from "axios";
import questions from "../data/questions";
import { useNavigate } from "react-router-dom";
import "./Assessment.css";

function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    new Array(questions.length).fill(null)
  );

  const navigate = useNavigate();

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value) => {
    const updated = [...answers];
    updated[currentQuestion] = value;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://nextgen-backend.onrender.com/predict",
        { answers }
      );

      navigate("/result", {
        state: { career: response.data.predicted_career },
      });

    } catch (error) {
      alert("Error connecting to backend");
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "left" }}>Career Assessment</h2>

      {/* Progress Bar */}
      <div
        style={{
          background: "#ddd",
          height: "10px",
          borderRadius: "5px",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "10px",
            background: "#4caf50",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Question Card */}
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          padding: "30px",
          background: "#f4f6f9",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <h3>{questions[currentQuestion].question}</h3>

        <div style={{ margin: "20px 0" }}>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleAnswer(value)}
              style={{
                margin: "5px",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                background:
                  answers[currentQuestion] === value
                    ? "#4caf50"
                    : "#ddd",
                color:
                  answers[currentQuestion] === value
                    ? "white"
                    : "black",
              }}
            >
              {value}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              style={{ background: "green", color: "white" }}
            >
              Submit
            </button>
          ) : (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Assessment;