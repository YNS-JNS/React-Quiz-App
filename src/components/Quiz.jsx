import React, { useState, useEffect } from 'react';
import '../styles/Quiz.css'
// import questions from '../data/testData';
import { quizFullStackData as questions, quizFrontendData, quizBackendData } from '../data/data'

export default function Quiz() {
    const questionTimeLimit = 59 // 5 secondes
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(questionTimeLimit); // : to store time limit
    const [timerProgress, setTimerProgress] = useState(100); // Initialisé à 100%


    // To rerender component
    useEffect(() => {
        let countdown;

        if (currentQuestion < questions.length && !showScore) {
            countdown = setInterval(() => {
                setTimer((prevTimer) => {
                    const newProgress = (prevTimer / questionTimeLimit) * 100;
                    setTimerProgress(newProgress);

                    if (prevTimer <= 0) {
                        handleNextQuestion();
                        return questionTimeLimit;
                    } else {
                        return prevTimer - 1;
                    }
                });
            }, 1000);
        }

        return () => clearInterval(countdown);

    }, [currentQuestion, showScore]);


    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        handleNextQuestion();
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setTimer(questionTimeLimit); // Réinitialise le minuteur pour la nouvelle question
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='wrapped-section'>
            <div className='quiz-section'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            <div className='timer'>
                                <progress value={timerProgress} max="100"></progress>
                            </div>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>

    );
}
