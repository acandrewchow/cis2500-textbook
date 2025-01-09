"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);

  const items = [
    { link: "/", label: "Home" },
    { link: "lectures/resources", label: "Resources" },
    { link: "tutorials", label: "Tutorials" },
  ];

  const topics = [
    { link: "/topics/compilation", label: "Compilation" },
    { link: "/topics/binary-files", label: "Binary Files" },
    {
      link: "/topics/dynamic-memory-allocation",
      label: "Dynamic Memory Allocation",
    },
    { link: "/topics/recursion", label: "Recursion" },
    { link: "/topics/linked-lists", label: "Linked Lists" },
    { link: "/topics/stacks-and-queues", label: "Stacks and Queues" },
    { link: "/topics/function-pointers", label: "Function Pointers" },
    { link: "/topics/search-and-sorting", label: "Searching & Sorting" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTopics = () => {
    setIsTopicsOpen(!isTopicsOpen);
  };

  return (
    <div>
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="text-white rounded-md fixed top-6 left-6 z-50"
        >
          <FontAwesomeIcon icon={faBars} className="h-8 w-8" />
        </button>
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-zinc-800 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-3/5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 z-40`}
      >
        <div className="p-8">
          <button onClick={toggleMenu} className="absolute top-6 left-6">
            <FontAwesomeIcon icon={faTimes} className="h-8 w-8" />
          </button>

          <h2 className="text-xl font-bold text-white mb-4 mt-10 text-center">
            Table of Contents
          </h2>
          <ul>
            <li className="mb-4 text-center">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-lg text-white hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li className="mb-4">
              <button
                onClick={toggleTopics}
                className="w-full text-lg text-white hover:text-blue-600 flex items-center justify-center"
              >
                Topics
                <FontAwesomeIcon
                  icon={isTopicsOpen ? faChevronUp : faChevronDown}
                  className="ml-2"
                />
              </button>
              {isTopicsOpen && (
                <ul className="mt-2 space-y-2 text-center">
                  {topics.map((topic, index) => (
                    <li key={index}>
                      <Link
                        href={topic.link}
                        onClick={() => {
                          setIsOpen(false);
                          setIsTopicsOpen(false);
                        }}
                        className="text-md text-white hover:text-blue-600"
                      >
                        {topic.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="mb-4 text-center">
              <Link
                href="/quizzes/home"
                onClick={() => setIsOpen(false)}
                className="text-lg text-white hover:text-blue-600"
              >
                Quizzes
              </Link>
            </li>

            <li className="mb-4 text-center">
              <Link
                href="/exercises/home"
                onClick={() => setIsOpen(false)}
                className="text-lg text-white hover:text-blue-600"
              >
                Exercises
              </Link>
            </li>

            <li className="mb-4 text-center">
              <Link
                href="/resources"
                onClick={() => setIsOpen(false)}
                className="text-lg text-white hover:text-blue-600"
              >
                Resources
              </Link>
            </li>

            <li className="mb-4 text-center">
              <Link
                href="/tutorials/home"
                onClick={() => setIsOpen(false)}
                className="text-lg text-white hover:text-blue-600"
              >
                Tutorials
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
