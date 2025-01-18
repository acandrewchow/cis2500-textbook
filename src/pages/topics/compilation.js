import React from "react";
import Lecture from "@/components/Lecture";
import CompilationContent from "@/data/lecture-content/Compilation.json";

const Compilation = () => {
  return <Lecture content={CompilationContent} />;
};

export default Compilation;