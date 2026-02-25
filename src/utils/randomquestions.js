// frontend/src/utils/randomquestions.js

import { questions } from "./questions";

/**
 * Return `count` distinct questions chosen at random.
 * If `count` is larger than the question bank the entire
 * list is returned in shuffled order.
 *
 * @param {number} [count=10]
 * @returns {Array<Object>}
 */
export function getRandomQuestions(count = 10) {
  // shallow copy + Fisher‑Yates style shuffle
  const arr = [...questions];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(count, arr.length));
}

export default getRandomQuestions;