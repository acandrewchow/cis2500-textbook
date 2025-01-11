import React from "react";
import TableOfContents from "@/components/TableOfContents";
import noMachineContent from "@/data/tutorials/noMachineContent.json"; 

const NoMachineTutorial = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center pt-28">
      <TableOfContents />
      <div className="bg-zinc-800 mb-24 shadow-md rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          {noMachineContent.title}
        </h1>
        <p className="text-lg mb-6 text-center">{noMachineContent.intro}</p>
        <div className="space-y-4">
          {noMachineContent.steps.map((step, index) => (
            <div
              key={index}
              className="p-4 bg-zinc-700 border-l-4 border-blue-600 rounded"
            >
              <h2 className="text-xl font-semibold">{step.title}</h2>
              <p className="text-white">{step.content}</p>
              {step.link && (
                <p>
                  Visit{" "}
                  <a
                    href={step.link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-blue-500 hover:underline"
                  >
                    {step.link.text}
                  </a>
                </p>
              )}
              {step.code && (
                <p>
                  <strong>Server IP Address:</strong>{" "}
                  <code className="font-bold bg-gray-800 rounded-md">
                    {step.code}
                  </code>
                </p>
              )}
            </div>
          ))}

          <div className="p-4 bg-zinc-700 border-l-4 border-blue-600 rounded">
            <h2 className="text-xl font-semibold mb-4">{noMachineContent.demo.title}</h2>
            <div className="mb-6">
              <video
                width={noMachineContent.demo.video.width}
                height={noMachineContent.demo.video.height}
                controls
                className="rounded-lg shadow-lg"
              >
                <source
                  src={noMachineContent.demo.video.src}
                  type={noMachineContent.demo.video.type}
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMachineTutorial;