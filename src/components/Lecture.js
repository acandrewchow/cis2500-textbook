import React from "react";
import TableOfContents from "@/components/TableOfContents";
import Paragraph from "@/components/Paragraph";

const Lecture = ({ content }) => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <TableOfContents />
      <div className="max-w-4xl mx-auto p-8">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-blue-400 mb-4">
            {content.title}
          </h1>
        </header>

        <div className="bg-zinc-800 rounded-lg shadow-lg p-6 space-y-6">
          {content.sections &&
            content.sections.map((section, index) => (
              <section key={index}>
                {section.title && (
                  <h2 className="text-2xl font-semibold mb-2 text-blue-400">
                    {section.title}
                  </h2>
                )}

                {section.content && <Paragraph>{section.content}</Paragraph>}

                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                    {section.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.codeExample && (
                  <>
                    <div className="bg-zinc-700 p-4 rounded-lg my-4">
                      <h3 className="text-xl font-semibold text-blue-400">
                        {section.codeExample.title}
                      </h3>
                      <pre className="text-sm text-gray-200 whitespace-pre-wrap">
                        {section.codeExample.code}
                      </pre>
                    </div>
                    {section.codeExample.explanation && (
                      <Paragraph className="text-gray-300 mt-4">
                        {section.codeExample.explanation}
                      </Paragraph>
                    )}
                  </>
                )}
              </section>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Lecture;