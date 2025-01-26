import React from "react";
import TableOfContents from "@/components/TableOfContents";
import valgrindContent from "@/data/tutorials/valgrindContent.json";

export default function ValgrindTutorial() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-8">
      <TableOfContents />

      <h1 className="text-4xl font-bold mt-12 mb-6 text-center">
        {valgrindContent.title}
      </h1>

      <section className="mt-12 text-lg max-w-3xl">
        {valgrindContent.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>

            {typeof section.content === "string" ? (
              <p className="mb-6">{section.content}</p>
            ) : (
              <p className="mb-6">
                {section.content.text}{" "}
                <a
                  href={section.content.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {section.content.link.label}
                </a>
              </p>
            )}

            {section.steps && (
              <>
                <h3 className="text-xl font-semibold mt-8 mb-4">
                  Steps
                </h3>
                <ol className="list-decimal text-left space-y-4 ml-5">
                  {section.steps.map((step, stepIndex) => (
                    <li
                      key={stepIndex}
                      className="space-y-2 whitespace-nowrap text-md"
                    >
                      <p>
                        {step.text}{" "}
                        {step.code && (
                          <code className="bg-gray-800 text-white text-xs px-2 py-1 rounded ml-2">
                            {step.code}
                          </code>
                        )}
                      </p>
                    </li>
                  ))}
                </ol>
              </>
            )}

            {section.codeExample && (
              <>
                <h3 className="text-xl font-semibold mt-8 mb-4">
                  {section.heading.includes("Fixing Memory Leaks")
                    ? "Without Memory Leaks"
                    : "With Memory Leaks"}{" "}
        
                </h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code className="whitespace-pre-wrap text-sm">
                    {section.codeExample.code}
                  </code>
                </pre>
              </>
            )}

            {section.images && (
              <div className="mt-6 space-y-4">
                {section.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-lg shadow-lg"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
