import React from "react";
import TableOfContents from "@/components/TableOfContents";
import Paragraph from "@/components/Paragraph";
import CompilationContent from "@/data/lecture-content/Compilation.json";

const Compilation = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <TableOfContents />
      <div className="max-w-4xl mx-auto p-8">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-blue-400 mb-4">
            {CompilationContent.title}
          </h1>
        </header>

        <div className="bg-zinc-800 rounded-lg shadow-lg p-6 space-y-6">
          {CompilationContent.makefileSection && (
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-blue-400">
                {CompilationContent.makefileSection.title}
              </h2>
              <Paragraph>
                {CompilationContent.makefileSection.content}
              </Paragraph>

              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                {Object.keys(
                  CompilationContent.makefileSection.makefileParts
                ).map((part, index) => (
                  <li key={index}>
                    <strong>{part}:</strong>{" "}
                    {CompilationContent.makefileSection.makefileParts[part]}
                  </li>
                ))}
              </ul>

              <div className="bg-zinc-700 p-4 rounded-lg my-4">
                <h3 className="text-xl font-semibold text-blue-400">
                  Makefile Example
                </h3>
                <pre className="text-sm text-gray-200 whitespace-pre-wrap">
                  {CompilationContent.makefileSection.example.makefile}
                </pre>
              </div>
            </section>
          )}

          {CompilationContent.makefileSection?.example?.explanation && (
            <div className="text-lg text-gray-300 mt-4">
              <h4 className="font-semibold">Explanation:</h4>
              <ul className="list-disc pl-6 space-y-2">
                {Object.entries(
                  CompilationContent.makefileSection.example.explanation
                ).map(([key, value], index) => (
                  <li key={index}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {CompilationContent.makefileBenefits && (
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-blue-400">
                {CompilationContent.makefileBenefits.title}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                {CompilationContent.makefileBenefits.content.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </section>
          )}

          {CompilationContent.bestPractices && (
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-blue-400">
                {CompilationContent.bestPractices.title}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                {CompilationContent.bestPractices.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Compilation;
