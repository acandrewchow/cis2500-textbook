import React from "react";
import { useRouter } from "next/router";
import Quiz from "@/components/Quiz";
import TableOfContents from "@/components/TableOfContents";

import quizOneQuestions from "@/data/quizzes/quizOneQuestions.json";
import quizTwoQuestions from "@/data/quizzes/quizTwoQuestions.json";
import quizThreeQuestions from "@/data/quizzes/quizThreeQuestions.json";
import quizFourQuestions from "@/data/quizzes/quizFourQuestions.json";
import quizFiveQuestions from "@/data/quizzes/quizFiveQuestions.json";
import quizSixQuestions from "@/data/quizzes/quizSixQuestions.json";
import quizSevenQuestions from "@/data/quizzes/quizSevenQuestions.json";

/*
Quiz Data
- Each quiz must have an associated JSON File with questions
- Similarly, add another item here to render the dynamic quiz
*/
const quizData = {
  quizOne: {
    title: "Quiz 1: Review and Compilation",
    questions: quizOneQuestions,
  },
  quizTwo: {
    title: "Quiz 2: Binary Files",
    questions: quizTwoQuestions,
  },
  quizThree: {
    title: "Quiz 3: Memory",
    questions: quizThreeQuestions,
  },
  quizFour: {
    title: "Quiz 4: Recursion",
    questions: quizFourQuestions,
  },
  quizFive: {
    title: "Quiz 5: Linked Lists",
    questions: quizFiveQuestions,
  },
  quizSix: {
    title: "Quiz 6: Stacks and Queues",
    questions: quizSixQuestions,
  },
  quizSeven: {
    title: "Quiz 7: Function Pointers",
    questions: quizSevenQuestions,
  }
};

const QuizPage = () => {
  const router = useRouter();
  const { quizId } = router.query;

  const quiz = quizData[quizId];

  if (!quiz) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-zinc-900">
        <h1 className="text-2xl">Quiz not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex justify-center pt-28 pb-28">
      <div className="bg-zinc-800 shadow-md rounded-lg p-8 w-full max-w-4xl">
        <TableOfContents />
        <h1 className="text-4xl font-bold text-white text-center">
          {quiz.title}
        </h1>
        <Quiz questions={quiz.questions} />
      </div>
    </div>
  );
};

export default QuizPage;
