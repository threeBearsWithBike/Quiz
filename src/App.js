import React from 'react';
import { useState } from 'react';
import questions from './questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);


  const handleQuizAgainButtonClick = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  }

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }


  return (
    <div className="App">
      {showScore ? (
        <div className='score-section'>Ваш результат {score} из {questions.length}
          <button onClick={handleQuizAgainButtonClick}>
            Еще раз
          </button>
        </div>
      ) : (
        <>
          <div className='question-section'>

            <div className='question-count'>
              <span>Вопрос {currentQuestion + 1}</span> / {questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>

          </div>

          <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map(answerOptions => {
                return (
                  <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                  {answerOptions.answerText}
                  </button>
                )
              })
            }
          </div>
        </>
      )}
    </div>
  );
}

export default App;
