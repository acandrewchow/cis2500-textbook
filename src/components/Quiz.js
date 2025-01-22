import React, { useState } from "react";

/*
Component that accepts a list of questions for a quiz 
*/

const Quiz = ({ questions }) => {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFeedback, setShowFeedback] = useState({});

  const handleAnswer = (questionId, choiceLabel) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: choiceLabel,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
    setShowFeedback({});
  };

  const handleShowFeedback = (questionId) => {
    setShowFeedback((prevFeedback) => ({
      ...prevFeedback,
      [questionId]: !prevFeedback[questionId],
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
      if (question.correctAnswer === answers[question.id]) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="quiz-container bg-zinc-800 p-6 rounded-lg shadow-lg">
      {questions.length > 0 ? (
        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="question-container mb-4">
              <h2 className="text-lg font-semibold mb-2 text-white">
                Question {question.id}: {question.text}
              </h2>
              {question.code && (
                <pre className="bg-zinc-900 p-4 rounded text-white overflow-auto">
                  <code>{question.code}</code>
                </pre>
              )}
              <div className="choices mt-4 space-y-2">
                {question.choices.map((choice) => (
                  <label
                    key={choice.label}
                    className={`block p-2 rounded-lg text-white cursor-pointer ${
                      isSubmitted
                        ? choice.label === question.correctAnswer
                          ? "bg-green-500"
                          : answers[question.id] === choice.label
                          ? "bg-red-500"
                          : "bg-zinc-700"
                        : answers[question.id] === choice.label
                        ? "bg-blue-500"
                        : "bg-zinc-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={choice.label}
                      className="hidden"
                      onChange={() => handleAnswer(question.id, choice.label)}
                      disabled={isSubmitted}
                    />
                    <span className="font-bold mr-2">{choice.label}.</span>{" "}
                    {choice.text}
                  </label>
                ))}
              </div>
              {isSubmitted && question.explanation && (
                <div className="mt-4">
                  <button
                    onClick={() => handleShowFeedback(question.id)}
                    className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-400 transition duration-200"
                  >
                    {showFeedback[question.id] ? "Hide Feedback" : "Show Feedback"}
                  </button>
                  {showFeedback[question.id] && (
                    <div className="mt-2 p-4 bg-yellow-100 text-black rounded-lg">
                      <strong>Explanation:</strong> {question.explanation}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-white">No questions available!</p>
      )}
      {!isSubmitted && questions.length > 0 ? (
        <button
          onClick={handleSubmit}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
        >
          Submit Quiz
        </button>
      ) : (
        isSubmitted && (
          <div className="text-center mt-6 p-6 bg-zinc-700 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              Quiz Score
            </h3>
            <p className="text-xl text-white mb-6">
              You scored{" "}
              <span className="text-yellow-400 font-semibold">
                {calculateScore()}
              </span>{" "}
              out of{" "}
              <span className="text-yellow-400 font-semibold">
                {questions.length}
              </span>
              .
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-500 transition duration-200"
            >
              Restart Quiz
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;