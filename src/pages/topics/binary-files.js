import React from "react";
import Lecture from "@/components/Lecture";
import BinaryFilesContent from "@/data/lecture-content/BinaryFiles.json";

const BinaryFiles = () => {
  return <Lecture content={BinaryFilesContent} />;
};

export default BinaryFiles;