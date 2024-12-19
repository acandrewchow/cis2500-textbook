import React from "react";
import TableOfContents from "./TableOfContents";

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white">
      <TableOfContents />
      <div className="max-w-4xl text-center p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Intermediate Programming</h1>
        <p className="text-lg mb-6">
          Welcome to the CIS2500 - Intermediate Programming
        </p>
        <div className="flex justify-center">
          <img
            src="/images/guelph.jpg"
            alt="Abstract Programming Art"
            className="w-2/3 rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;