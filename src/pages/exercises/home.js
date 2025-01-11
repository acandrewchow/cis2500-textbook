import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import codingExercisesData from "@/data/exercises/exerciseRoutes.json";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-8">
      <TableOfContents />
      <h1 className="text-4xl font-bold mt-12 mb-6 text-center">
        Coding Exercises
      </h1>
      <div className="w-full max-w-4xl">
        {codingExercisesData.map((codingExercise, topicIndex) => (
          <div key={topicIndex} className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              {codingExercise.name}
            </h2>
            <div className="space-y-4">
              {codingExercise.exercises.map((exercise, index) => (
                <Link
                  key={index}
                  href={exercise.link}
                  className="bg-zinc-800 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-3 flex items-center justify-between"
                >
                  <h3 className="text-sm font-semibold mb-2">
                    {exercise.label}
                  </h3>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="ml-2 text-xl text-blue-500"
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
