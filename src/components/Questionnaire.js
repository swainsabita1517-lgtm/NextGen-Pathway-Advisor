import React, { useState } from "react";
import { questions } from "../data/questions";

const Questionnaire = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Store answers as { questionId: score }
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentIndex];

  const handleAnswerChange = (score) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: score
    });
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      if (onFinish) onFinish(answers);
    }
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg">

      <h2 className="text-xl font-bold mb-6">
        Question {currentIndex + 1} / {questions.length}
      </h2>

      <p className="mb-6 text-lg">
        {currentQuestion.question}
      </p>

      {/* Answer Options (1-5 Likert Scale) */}
      <div className="flex gap-4 mb-8">
        {[1, 2, 3, 4, 5].map((score) => (
          <button
            key={score}
            onClick={() => handleAnswerChange(score)}
            className={`px-4 py-2 rounded-lg border 
            ${answers[currentQuestion.id] === score
                ? "bg-blue-500 text-white"
                : "bg-gray-100"}`}
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
          className="px-6 py-2 rounded-lg bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={nextQuestion}
          className="px-6 py-2 rounded-lg bg-blue-600 text-white"
        >
          {currentIndex === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;