import React from "react";
import TableOfContents from "@/components/TableOfContents";
import sshContent from "@/data/tutorials/sshContent.json";

export default function SSHTutorial() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-8">
      <TableOfContents />

      <h1 className="text-4xl font-bold mt-12 mb-6 text-center">
        {sshContent.title}
      </h1>

      <section className="mt-12 text-lg max-w-3xl">
        {sshContent.sections.map((section, index) => (
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
                <h3 className="text-xl font-semibold mt-8 mb-4">Steps</h3>
                <ol className="list-decimal text-left space-y-4 ml-5">
                  {section.steps.map((step, stepIndex) => (
                    <li
                      key={stepIndex}
                      className="space-y-2 whitespace-nowrap text-sm"
                    >
                      <p>{step.text}</p>

                      {step.image && (
                        <div className="mt-4">
                          <img
                            src={step.image.src}
                            alt={step.image.alt}
                            className="w-full rounded-lg shadow-lg"
                          />
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
