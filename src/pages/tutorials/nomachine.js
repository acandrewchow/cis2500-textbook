import React from "react";
import TableOfContents from "@/components/TableOfContents";

const NoMachineTutorial = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center pt-28">
      <TableOfContents />
      <div className="bg-zinc-800 mb-24 shadow-md rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          NoMachine Tutorial
        </h1>
        <p className="text-lg mb-6 text-center">
          Welcome to the NoMachine tutorial. Follow the steps below to get
          started.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-zinc-700 border-l-4 border-blue-600 rounded">
            <h2 className="text-xl font-semibold">
              Step 1: Download NoMachine
            </h2>
            <p className="text-white">
              NoMachine is available for both Windows and MacOS, please visit{" "}
              <a
                href="https://wiki.socs.uoguelph.ca/techsupport/guides/nomachine"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-500 hover:underline"
              >
                Wiki Socs
              </a>{" "}
              to download the software.
            </p>
          </div>
          <div className="p-4 bg-zinc-700 border-l-4 border-blue-600 rounded">
            <h2 className="text-xl font-semibold">
              Step 2: Setup Configurations
            </h2>
            <p className="text-white">
              Follow the setup instructions provided on the website to set up
              NoMachine on your local machine.
            </p>
          </div>
          <div className="p-4 bg-zinc-700 border-l-4 border-blue-600 rounded">
            <h2 className="text-xl font-semibold">
              Step 3: Connect to the School's Linux Servers
            </h2>
            <p className="text-white">
              Open NoMachine, enter the IP address of the linux servers{" "}
              <code className="font-bold bg-gray-800 rounded-md">
                nomachine.linux.socs.uoguelph.ca
              </code>
              , and follow the prompts to connect to the school's linux servers.
            </p>
          </div>

          <div className="p-4 bg-zinc-700 border-l-4 border-blue-600 rounded">
            <h2 className="text-xl font-semibold mb-4">Demo</h2>
            <p className="text-white"></p>
            <div className="mb-6">
              <video
                width="100%"
                height="auto"
                controls
                className="rounded-lg shadow-lg"
              >
                <source src="/demos/noMachine.mov" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMachineTutorial;