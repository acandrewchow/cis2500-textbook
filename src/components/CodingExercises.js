"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CodeRunner from "./CodeRunner";
import Clipboard from "./Clipboard";

/*
  Main component for a coding exercise which accepts the path for its respective JSON exercise
*/
const CodingExercise = ({ jsonFilePath }) => {
  const [exercise, setExercise] = useState(null);
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [solutionCode, setSolutionCode] = useState("");

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

  const fetchSolution = async () => {
    if (exercise && exercise.solutionFilePath) {
      try {
        const response = await fetch(exercise.solutionFilePath);
        const code = await response.text();
        setSolutionCode(code);
      } catch (error) {
        console.error("Failed to load solution file:", error);
      }
    }
  };

  const toggleHints = () => setShowHints(!showHints);

  const toggleSolution = () => {
    if (!showSolution) {
      fetchSolution();
    }
    setShowSolution(!showSolution);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-10">
      {exercise ? (
        <div className="bg-zinc-800 p-8 rounded-xl shadow-lg border border-zinc-700 max-w-6xl mx-auto overflow-auto">
          <h1 className="text-4xl font-bold mb-6">{exercise.title}</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            {exercise.description}
          </p>
          <p className="text-yellow-300 text-sm font-semibold mb-6">
            Note: For each coding exercise, implement the function definition.
            Do not edit the main function or any other parts of the provided
            code unless instructed. Once you are finished, click the Submit
            button.
          </p>

          <div className="mb-6">
            <div className="flex gap-4 mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={toggleHints}
              >
                {showHints ? "Hide Hints" : "Show Hints"}
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={toggleSolution}
              >
                {showSolution ? "Hide Solution" : "Show Solution"}
              </button>
            </div>

            {showHints && (
              <ul className="list-disc list-inside bg-zinc-700 p-4 rounded-lg shadow-md text-gray-300 border border-gray-600 mb-4">
                {exercise.hints.map((hint, index) => (
                  <li key={index} className="flex items-center gap-2 py-1">
                    <span className="text-blue-400">💡</span>
                    {hint}
                  </li>
                ))}
              </ul>
            )}
            {showSolution && (
              <div className="relative">
                <pre className="bg-zinc-700 p-4 rounded-lg shadow-md border border-gray-600 text-gray-300 overflow-auto">
                  <code>{solutionCode}</code>
                </pre>
                <div className="absolute bottom-4 right-4">
                  <Clipboard solutionCode={solutionCode} />
                </div>
              </div>
            )}
          </div>

          <CodeRunner
            codeFilePath={exercise.codeFilePath}
            apiEndpoint={exercise.apiEndpoint}
            isReadOnly={exercise.isReadOnly}
            testCases={exercise.testCases}
            isValgrindEnabled={exercise.isValgrind}
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
