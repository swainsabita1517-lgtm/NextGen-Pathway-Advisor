import axios from "axios";

export const predictCareer = async (answers) => {
  const response = await axios.post("http://localhost:5000/predict", {
    answers: answers
  });
  return response.data.career;
};