"use client;";
import React from "react";
import CreateQuiz from "@/components/CreateQuiz";
import TableOfContents from "@/components/TableOfContents";

const create = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-8">
      <TableOfContents />
      <CreateQuiz />
    </div>
  );
};

export default create;
