import React from "react";
import TableOfContents from "@/components/TableOfContents";
import installationContent from "@/data/tutorials/installationContent.json";

export default function Installation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-8">
      <TableOfContents />

      <h1 className="text-4xl font-bold mt-12 mb-6 text-center">
        {installationContent.title}
      </h1>

      <section className="mt-12 text-lg max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          {installationContent.prerequisites.title}
        </h2>
        <p className="mb-6">{installationContent.prerequisites.description}</p>
        <ul className="list-disc list-inside text-left space-y-2">
          {installationContent.prerequisites.items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-4">
          {installationContent.steps.title}
        </h2>
        <p className="mb-6">{installationContent.steps.description}</p>
        <ol className="list-decimal text-left">
          {installationContent.steps.items.map((step, index) => (
            <li key={index} className="space-y-2 ml-4">
              <p>
                {step.text}{" "}
                {step.code && (
                  <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
                    {step.code}
                  </code>
                )}
                {step.explanation && (
                  <span className="text-white">{step.explanation}</span>
                )}
              </p>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-semibold mb-4 mt-4">
          {installationContent.demo.title}
        </h2>
        <div className="mb-6">
          <video
            width="100%"
            height="auto"
            controls
            className="rounded-lg shadow-lg"
          >
            <source src={installationContent.demo.videoPath} type="video/mp4" />
          </video>
        </div>

        <h2 className="text-2xl font-semibold mb-4 mt-4">
          {installationContent.keyNotes.title}
        </h2>
        <p className="mb-6">{installationContent.keyNotes.description}</p>
      </section>
    </div>
  );
}
