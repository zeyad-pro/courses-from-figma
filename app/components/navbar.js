"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[/fff] border-gray-200 dark:bg-[/fff] z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-50">
        <a href="/" className="flex items-center  animate from-bottom fast space-x-3 rtl:space-x-reverse z-50">
          <img src="/web imgs/logo.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Koursely
          </span>
        </a>

        {/* زرار الموبايل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
          rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* القائمة */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul
            className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 
            rounded-lg bg-white/50 bg-blur-xl md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 
            md:border-0 md:bg-[/fff] dark:bg-gray-800 md:dark:bg-[/fff]
             dark:border-gray-700"
          >
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent 
                 animate from-bottom medium delay-1
                md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                  animate from-bottom medium delay-2
                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                animate from-bottom medium delay-3
                dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                animate from-bottom medium delay-4
                dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Teacher
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
                dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                animate from-bottom slow delay-3
                dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Blog
              </a>
            </li>
            <li>
           <a
              type="button"
              className="text-gray-900 bg-[fff] hover:bg-gray-50 border
               border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-500 
               animate from-bottom slow delay-4
               font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
                dark:focus:ring-gray-800 dark:bg-[fff] dark:border-gray-700
                 dark:text-gray-900 dark:hover:bg-gray-200 "
            >
              Contact
            </a>
            </li>
      
          </ul>
        </div>
      </div>
    </nav>
  );
}
