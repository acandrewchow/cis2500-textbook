import React from "react";
import TableOfContents from "@/components/TableOfContents";
import CodingExercise from "@/components/CodingExercises";

const topStudentExercise = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center">
      <TableOfContents />
      <div className="w-full max-w-5xl mt-12">
        <CodingExercise jsonFilePath="/code-examples/exercises/review/sortStudents.json" />
      </div>
    </div>
  );
};

export default topStudentExercise;