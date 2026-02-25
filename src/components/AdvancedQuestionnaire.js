import React, { useState } from "react";
import { questions, calculateCareerScores, getTopCareerRecommendation } from "../data/questions";
import axios from "axios";

const AdvancedQuestionnaire = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (score) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: score
    });
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      submitAnswers();
    }
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // ================= Backend ML Prediction Call =================

  const submitAnswers = async () => {

    try {
      setLoading(true);

      // Local scoring (fallback)
      const localScore = calculateCareerScores(answers);
      const localPrediction = getTopCareerRecommendation(localScore);

      // Send data to backend ML API
      const response = await axios.post(
        "http://localhost:5000/predict-career",
        { answers }
      );

      setResult(response.data.prediction || localPrediction);

    } catch (error) {
      console.error(error);

      // Fallback prediction
      const fallbackScore = calculateCareerScores(answers);
      setResult(getTopCareerRecommendation(fallbackScore));

    } finally {
      setLoading(false);
    }
  };

  // ================= UI =================

  if (result) {
    return (
      <div className="p-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl text-center">

        <h2 className="text-2xl font-bold mb-6">
          🎯 Career Recommendation Result
        </h2>

        <p className="text-xl text-blue-600 font-semibold mb-6">
          Recommended Career: {result}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl"
        >
          Restart Test
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-2xl shadow-xl">

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div
          className="h-3 rounded-full bg-blue-600 transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`
          }}
        />
      </div>

      {/* Question Counter */}
      <p className="text-gray-500 mb-4">
        Question {currentIndex + 1} of {questions.length}
      </p>

      {/* Question Text */}
      <h3 className="text-xl font-semibold mb-8">
        {currentQuestion.question}
      </h3>

      {/* Answer Buttons */}
      <div className="flex gap-4 justify-center mb-10 flex-wrap">
        {[1, 2, 3, 4, 5].map((score) => (
          <button
            key={score}
            onClick={() => handleAnswer(score)}
            className={`w-14 h-12 rounded-xl border transition 
            ${answers[currentQuestion.id] === score
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-blue-100"}`}
          >
            {score}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}

      <div className="flex justify-between">

        <button
          onClick={previousQuestion}
          disabled={currentIndex === 0}
          className="px-6 py-2 rounded-xl bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={nextQuestion}
          disabled={!answers[currentQuestion.id]}
          className="px-6 py-2 rounded-xl bg-blue-600 text-white"
        >
          {currentIndex === questions.length - 1
            ? (loading ? "Processing..." : "Submit")
            : "Next"}
        </button>

      </div>

    </div>
  );
};

export default AdvancedQuestionnaire;