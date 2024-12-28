import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

const Home = () => {
  const quizzes = [
    { label: "Quiz 1: Lorem Ipsum", description: "Lorem Ipsum", link: "/quizzes/quizOne" },
    { label: "Quiz 2: Lorem Ipsum", description: "Lorem Ipsum", link: "/quizzes/quizTwo" },
    { label: "Quiz 3: Lorem Ipsum", description: "Lorem Ipsum", link: "/quizzes/quizThree" },
    { label: "Quiz 4: Lorem Ipsum", description: "Lorem Ipsum", link: "/quizzes/quizFour" },
    { label: "Quiz 5: Lorem Ipsum", description: "Lorem Ipsum", link: "/quizzes/quizFive" },
    { label: "Quiz 6: Lorem Ipsum", description: "Lorem Ipsum", link: "/quizzes/quizSix" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-8">
      <TableOfContents />
      <h1 className="text-4xl font-bold mt-12 mb-6 text-center">Quizzes</h1>      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 w-full max-w-2xl">
        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold mb-2">{quiz.label}</h3>
            <p className="text-gray-400 mb-6">{quiz.description}</p>
            <Link
              href={quiz.link}
              className="text-blue-500 hover:underline text-sm absolute bottom-4 right-4"
            >
              Start Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;