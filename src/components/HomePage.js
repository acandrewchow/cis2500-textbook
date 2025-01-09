import React from "react";
import TableOfContents from "./TableOfContents";
import Footer from "./Footer";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-900 text-white px-6 py-8">
      <TableOfContents />
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-4">
          Intermediate Programming
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Written by <span className="font-semibold">Andrew Chow</span>
        </p>
        <Link
          href="/installation"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Installation Instructions
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
