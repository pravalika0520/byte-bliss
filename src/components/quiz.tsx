import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "What helps plants make their own food?",
    options: ["Photosynthesis", "Walking", "Dancing", "Sleeping"],
    correct: "Photosynthesis"
  },
  {
    id: 2,
    question: "Which of these helps reduce pollution?",
    options: ["Riding a bike", "Using more plastic", "Leaving lights on", "Wasting water"],
    correct: "Riding a bike"
  }
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {!showResult ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1}</h2>
          <p className="text-xl mb-6">{questions[currentQuestion].question}</p>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== ""}
                className={`w-full p-4 text-left rounded-lg transition-colors ${
                  selectedAnswer === option
                    ? option === questions[currentQuestion].correct
                      ? 'bg-green-100 border-green-500'
                      : 'bg-red-100 border-red-500'
                    : 'bg-gray-100 hover:bg-gray-200'
                } border-2`}
              >
                {option}
                {selectedAnswer === option && (
                  option === questions[currentQuestion].correct 
                    ? <CheckCircle className="inline ml-2 text-green-500" />
                    : <XCircle className="inline ml-2 text-red-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl">You scored {score} out of {questions.length}!</p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowResult(false);
            }}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}