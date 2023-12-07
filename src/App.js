import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Who won cricket World cup 2023?',
    options: ['Australia', 'India', 'South Africa', 'NewZealand'],
    correctAnswer: 'Australia',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the largest mammal?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Blue Whale',
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
    correctAnswer: 'Tokyo',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (selected) => {
    setSelectedOption(selected);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="App">
      {currentQuestion < questions.length ? (
        <div>
          <h1>MCQ Game</h1>
          <p>Question {currentQuestion + 1}</p>
          <h3>{questions[currentQuestion].question}</h3>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className={selectedOption === option ? 'selected' : ''}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      ) : (
        <div>
          <h1>Game Over</h1>
          <p className='score'>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
}

export default App;
