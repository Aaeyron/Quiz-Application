// components/Nagtalon.js

import { useState } from 'react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our Solar System?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Silver", "Hydrogen"],
    answer: "Oxygen",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the freezing point of water?",
    options: ["0°C", "100°C", "32°F", "212°F"],
    answer: "0°C",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
    answer: "Mitochondria",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    answer: "Japan",
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
    answer: "Canberra",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1914", "1918", "1920"],
    answer: "1912",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    answer: "Blue Whale",
  },
];

export default function Nagtalon() {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRetake = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizFinished(false);
    setSelectedAnswer(null);
  };

  return (
    <div>
      {quizFinished ? (
        <div>
          <h2>Your score: {score} / {questions.length}</h2>
          <button onClick={handleRetake}>Retake Quiz</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div>
            {questions[currentQuestionIndex].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                style={{ backgroundColor: selectedAnswer === option ? '#d3d3d3' : '' }}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleSubmit} disabled={!selectedAnswer}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
