import React from "react";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";

const Home = () => {
  const tutorials = [
    {
      title: "SSH to Connect to the School's Linux Server",
      description: "Learn how to securely access the school's Linux servers using SSH via VS Code.",
      link: "/tutorials/ssh",
    },
    {
      title: "Connecting to NoMachine",
      description: "Use NoMachine to access the school's Linux servers with a GUI.",
      link: "/tutorials/nomachine",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-8">
      <TableOfContents />
      <h1 className="text-4xl font-bold mt-12 mb-6 text-center">Tutorials</h1>
      <p className="text-lg text-center mb-8">Explore these tutorials</p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 w-full max-w-2xl">
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
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