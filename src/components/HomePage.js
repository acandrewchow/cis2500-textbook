import React from "react";
import TableOfContents from "./TableOfContents";

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-8">
      <TableOfContents />
      <h1 className="text-4xl font-bold mb-6">Intermediate Programming</h1>
      <p className="text-lg mb-6">Welcome to CIS2500</p>

      <a
        href="/installation"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 inline-block"
      >
        Installation Instructions
      </a>
    </div>
  );
};

export default HomePage;
