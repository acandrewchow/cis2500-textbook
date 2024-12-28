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
  const [isLecturesOpen, setIsLecturesOpen] = useState(false);

  const items = [
    { link: "/", label: "Home" },
    { link: "lectures/resources", label: "Resources" },
    { link: "tutorials", label: "Tutorials" },
  ];

  const lectures = [
    { link: "lectures/week1", label: "Week 1" },
    { link: "lectures/week2", label: "Week 2" },
    { link: "lectures/week3", label: "Week 3" },
    { link: "lectures/week4", label: "Week 4" },
    { link: "lectures/week5", label: "Week 5" },
    { link: "lectures/week6", label: "Week 6" },
    { link: "lectures/week7", label: "Week 7" },
    { link: "lectures/week8", label: "Week 8" },
    { link: "lectures/week9", label: "Week 9" },
    { link: "lectures/week10", label: "Week 10" },
    { link: "lectures/week11", label: "Week 11" },
    { link: "lectures/week12", label: "Week 12" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLectures = () => {
    setIsLecturesOpen(!isLecturesOpen);
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
                onClick={toggleLectures}
                className="w-full text-lg text-white hover:text-blue-600 flex items-center justify-center"
              >
                Lectures
                <FontAwesomeIcon
                  icon={isLecturesOpen ? faChevronUp : faChevronDown}
                  className="ml-2"
                />
              </button>
              {isLecturesOpen && (
                <ul className="mt-2 space-y-2 text-center">
                  {lectures.map((lecture, index) => (
                    <li key={index}>
                      <Link
                        href={lecture.link}
                        onClick={() => {
                          setIsOpen(false);
                          setIsLecturesOpen(false);
                        }}
                        className="text-md text-white hover:text-blue-600"
                      >
                        {lecture.label}
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
