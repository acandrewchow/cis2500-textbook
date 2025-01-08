import React from "react";
import Quiz from "@/components/Quiz";
import questions from "@/data/quizzes/quizTwoQuestions.json";
import TableOfContents from "@/components/TableOfContents";

const QuizTwo = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex justify-center pt-28 pb-28">
      <div className="bg-zinc-800 shadow-md rounded-lg p-8 w-full max-w-4xl">
        <TableOfContents />
        <h1 className="text-4xl font-bold text-white text-center">
          Quiz 2: Binary Files
        </h1>
        <Quiz questions={questions} />
      </div>
    </div>
  );
};

export default QuizTwo;