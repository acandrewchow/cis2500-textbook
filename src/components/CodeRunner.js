"use client";
import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";

export default function CodeRunner({
  codeFilePath,
  apiEndpoint,
  isReadOnly,
  isValgrindEnabled,
  testCases,
}) {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [valgrindOutput, setValgrindOutput] = useState("");
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

  const submitCode = async () => {
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

  const runValgrind = async () => {
    setValgrindOutput("");
    setError("");

    try {
      const response = await fetch("/api/valgrind", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        console.log(data.valgrindOutput);
        setValgrindOutput(data.valgrindOutput);
      } else {
        setError(data.error || "Failed to run Valgrind");
      }
    } catch (err) {
      setError("Failed to connect to the server for Valgrind");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-800 text-gray-800 p-4">
      <div>
        <CodeMirror
          value={code}
          onChange={(value) => setCode(value)}
          extensions={[cpp()]}
          theme="dark"
          height="600px"
          readOnly={isReadOnly}
        />
        <div className="mt-4 flex gap-4">
          {!isValgrindEnabled && (
            <button
              onClick={submitCode}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          )}
          {isValgrindEnabled && (
            <button
              onClick={runValgrind}
              className="px-4 py-2 bg-purple-500 text-white rounded"
            >
              Run Valgrind
            </button>
          )}
        </div>
      </div>

      {output && (
        <div className="mt-4 p-4 bg-zinc-700 rounded text-white">
          <h3 className="text-md font-bold">Program Output</h3>
          <pre>{output}</pre>
        </div>
      )}

      {valgrindOutput && (
        <div className="mt-4 p-4 bg-zinc-700 rounded text-white">
          <h3 className="text-md font-bold">Valgrind</h3>
          <pre>{valgrindOutput}</pre>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-100 rounded text-gray-800">
          <h3 className="text-md font-bold">Error:</h3>
          <code>{error}</code>
        </div>
      )}

      {testResults.map((result, index) => (
        <div key={index} className="mb-2 p-2 rounded border mt-2 bg-zinc-700">
          <h4 className="text-md font-semibold mb-1 text-white">
            Test Case {index + 1}:{" "}
            <span
              className={`${result.passed ? "text-green-300" : "text-red-300"}`}
            >
              {result.passed ? "Passed" : "Failed"}
            </span>
          </h4>
          <div className="text-white">
            <strong>Input:</strong>
            <pre className="bg-zinc-800 text-gray-200 p-1 rounded">
              {result.input || "N/A"}
            </pre>
          </div>
          <div className="text-white mt-1">
            <strong>Expected Output:</strong>
            <pre className="bg-zinc-800 text-gray-200 p-1 rounded">
              {result.expectedOutput || "N/A"}
            </pre>
          </div>
          <div className="text-white mt-1">
            <strong>Program Output:</strong>
            <pre className="bg-zinc-800 text-gray-200 p-1 rounded">
              {result.actualOutput || "Error"}
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}
