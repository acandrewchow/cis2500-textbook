"use client";
import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";

export default function CodeRunner({ codeFilePath, apiEndpoint, isReadOnly, testCases }) {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(codeFilePath);
        if (!response.ok) {
          throw new Error("Unable to load the code file");
        }
        const fetchedCode = await response.text();
        setCode(fetchedCode);
      } catch (err) {
        setError("Error loading code file: " + err.message);
      }
    };

    fetchCode();
  }, [codeFilePath]);

  const runCode = async () => {
    setOutput("");
    setError("");
    setTestResults([]);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, testCases }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.results) {
          setTestResults(data.results); 
        } else {
          setOutput(data.output); 
        }
      } else {
        setError(data.error || "An unknown error occurred");
      }
    } catch (err) {
      setError("Failed to connect to the server");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <div>
        <CodeMirror
          readOnly={isReadOnly}
          value={code}
          onChange={(value) => setCode(value)}
          extensions={[cpp()]}
          theme="dark"
          height="500px"
        />
        <button
          onClick={runCode}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Run Code
        </button>
      </div>

      {/* Display Program Output */}
      {output && (
        <div className="mt-4 p-4 bg-gray-700 rounded text-white">
          <h3 className="text-md font-bold">Program Output</h3>
          <code>{output}</code>
        </div>
      )}

      {/* Display Error Messages */}
      {error && (
        <div className="mt-4 p-4 bg-red-100 rounded text-gray-800">
          <h3 className="text-md font-bold">Error:</h3>
          <code>{error}</code>
        </div>
      )}

      {/* Display Test Case Results */}
      {testResults.length > 0 && (
  <div className="mt-4 p-4 bg-gray-700 rounded text-white">
    <h3 className="text-md font-bold mb-4">Test Case Results</h3>
    {testResults.map((result, index) => (
      <div
        key={index}
        className={`mb-4 p-4 rounded border ${
          result.passed ? "border-green-500" : "border-red-500"
        }`}
      >
        <h4 className="text-lg font-semibold mb-2">
          Test Case {index + 1}:{" "}
          <span
            className={`${
              result.passed ? "text-green-400" : "text-red-400"
            }`}
          >
            {result.passed ? "Passed" : "Failed"}
          </span>
        </h4>
        <p>
          <strong>Input:</strong> {result.input || "N/A"}
        </p>
        <p>
          <strong>Expected Output:</strong> {result.expectedOutput || "N/A"}
        </p>
        <p>
          <strong>Actual Output:</strong> {result.actualOutput || "Error"}
        </p>
      </div>
    ))}
  </div>
)}
    </div>
  );
}