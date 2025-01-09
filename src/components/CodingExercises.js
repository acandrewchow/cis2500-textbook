"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CodeRunner from "./CodeRunner";

const CodingExercise = ({ jsonFilePath }) => {
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const response = await fetch(jsonFilePath);
        const data = await response.json();
        setExercise(data);
      } catch (error) {
        console.error("Failed to load exercise:", error);
      }
    };

    fetchExercise();
  }, [jsonFilePath]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-10">
      {exercise ? (
        <div className="bg-zinc-800 p-8 rounded-xl shadow-lg border border-zinc-700 max-w-6xl mx-auto overflow-auto">
          <h1 className="text-4xl font-bold mb-6">{exercise.title}</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            {exercise.description}
          </p>
          <p className="text-yellow-300 text-sm font-semibold mb-6">
            Note: For each coding exercise, only fill in the code where the
            TODOs are. Do not edit the main function or any other parts of the
            provided code unless instructed. Once you are finished, click the
            submission button.
          </p>

          <CodeRunner
            codeFilePath={exercise.codeFilePath}
            apiEndpoint={exercise.apiEndpoint}
            isReadOnly={exercise.isReadOnly}
            testCases={exercise.testCases}
          />
        </div>
      ) : (
        <p className="text-gray-400 text-center mt-10 text-lg">
          Loading exercise...
        </p>
      )}
    </div>
  );
};

CodingExercise.propTypes = {
  jsonFilePath: PropTypes.string.isRequired,
};

export default CodingExercise;
