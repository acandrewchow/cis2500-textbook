"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; 

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);

  /*
  Course Content for CIS*2500
  To be added: Tutorials, Additional Resources, FAQ, Quiz section, etc
  */
  const items = [
    { link: "/", label: "Home" },
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
    { link: "lectures/resources", label: "Resources" },
    { link: "tutorials", label: "Tutorials" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        className={`fixed top-0 left-0 h-full bg-zinc-900 shadow-lg border-r transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-3/5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 z-40`}
      >
        <div className="p-8">
          <button
            onClick={toggleMenu}
            className="absolute top-6 left-6"
          >
            <FontAwesomeIcon icon={faTimes} className="h-8 w-8" /> 
          </button>

          <h2 className="text-xl font-bold text-white mb-4 mt-10 text-center">Table of Contents</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="mb-4 text-center">
                <Link
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-white hover:text-blue-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}