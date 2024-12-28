import React from "react";
import TableOfContents from "@/components/TableOfContents";

export default function Installation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-8">
      <TableOfContents />

      <h1 className="text-4xl font-bold mt-12 mb-6 text-center">
        Installation Instructions
      </h1>

      <section className="mt-12 text-lg max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
        <p className="mb-6">
          Before you can set up the interactive textbook locally, ensure you
          have the following installed:
        </p>
        <ul className="list-disc list-inside text-left space-y-2">
          <li>
            <a
              href="https://git-scm.com/download"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Git Version Control
            </a>
          </li>
          <li>
            <a
              href="https://www.docker.com/products/docker-desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Docker
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-4">Steps to Install</h2>
        <p className="mb-6">
          Follow these steps to get the interactive textbook up and running:
        </p>
        <ol className="list-decimal list-inside text-left space-y-2">
          <li>
            Clone the repository from GitHub -{" "}
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
              git clone github.com/acandrewchow/cis2500-textbook
            </code>
          </li>
          <li>
            Navigate to the project directory{" "}
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
              cd cis2500-textbook
            </code>
          </li>
          <li>
            Run the command
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
              docker build -t cis2500-textbook .
            </code>
            to build the initial image for the textbook
          </li>
          <li>
            Run
            <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
              docker run --name cis2500 -p 3000:3000 cis2500-textbook
            </code>
            to set up the Docker container on your local machine
          </li>
          <li>
            Open your browser and navigate to
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 ml-1"
            >
              http://localhost:3000
            </a>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4 mt-4">Demo</h2>

        <div className="mb-6">
          <video
            width="100%"
            height="auto"
            controls
            className="rounded-lg shadow-lg"
          >
            <source src="/demos/setup.mov" type="video/mp4" />
          </video>
        </div>

        <h2 className="text-2xl font-semibold mb-4 mt-4">Key Notes</h2>

        <p className="mb-6">
          Keep in mind that the Docker container will run in the background. If
          you need to stop the container, you can run the command{" "}
          <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
            docker stop cis2500
          </code>
          or click the stop button in Docker Desktop. Similarly, you can start
          the container again with
          <code className="bg-gray-800 text-white text-sm px-2 py-1 rounded ml-1">
            docker start cis2500
          </code>{" "}
          or by clicking the play button.
        </p>
      </section>
    </div>
  );
}
