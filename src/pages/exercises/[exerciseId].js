import React from "react";
import { useRouter } from "next/router";
import TableOfContents from "@/components/TableOfContents";
import CodingExercise from "@/components/CodingExercises";
import exerciseData from "@/data/exercises/exerciseRoutes.json";

const ExercisePage = () => {
  const router = useRouter();
  const { exerciseId } = router.query;

  const exerciseFilePath = exerciseData
    .flatMap((category) => category.exercises)
    .find((exercise) => exercise.link.endsWith(exerciseId))
    ?.filePath;

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