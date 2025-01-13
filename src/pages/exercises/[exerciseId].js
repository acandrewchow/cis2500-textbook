import React from "react";
import { useRouter } from "next/router";
import TableOfContents from "@/components/TableOfContents";
import CodingExercise from "@/components/CodingExercises";

const ExercisePage = () => {
  const router = useRouter();
  const { exerciseId } = router.query;

  const exerciseData = {
    topStudent: "/code-examples/exercises/review/topStudent.json",
    sortStudents: "/code-examples/exercises/review/sortStudents.json",
    findClosestToAverage:
      "/code-examples/exercises/review/findClosestToAverage.json",
    writeToBinary: "/code-examples/exercises/binary-files/writeToBinary.json",
  };

  const exerciseFilePath = exerciseData[exerciseId];

  if (!exerciseFilePath) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-zinc-900">
        <h1 className="text-2xl">Exercise not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center">
      <TableOfContents />
      <div className="w-full max-w-5xl mt-12">
        <CodingExercise jsonFilePath={exerciseFilePath} />
      </div>
    </div>
  );
};

export default ExercisePage;
