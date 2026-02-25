import { useEffect, useState } from "react";
import axios from "axios";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
  const loadQuestions = async () => {
    try {
      const response = await fetch("/questions_dataset.csv");

      if (!response.ok) {
        console.error("CSV file not found");
        return;
      }

      const text = await response.text();

      const rows = text.split("\n").slice(1);

      const questionsList = rows
        .map(row => {
          const cols = row.split(",");

          if (cols.length < 2) return null;

          return {
            id: cols[0]?.trim(),
            question: cols[1]?.trim()
          };
        })
        .filter(q => q && q.question);

      setQuestions(questionsList);
    } catch (error) {
      console.error("Error loading questions", error);
    }
  };
  }
  ,loadQuestions(),
  [])};