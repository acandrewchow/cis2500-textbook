import React from "react";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import tutorials from "@/data/tutorials/homeContent.json";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-8">
      <TableOfContents />
      <h1 className="text-4xl font-bold mt-12 mb-6 text-center">Tutorials</h1>      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 w-full max-w-2xl">
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
              className="bg-zinc-800 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
            <p className="text-gray-400 mb-6">{tutorial.description}</p>
            <Link
              href={tutorial.link}
              className="text-blue-500 hover:underline text-sm absolute bottom-4 right-4"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;