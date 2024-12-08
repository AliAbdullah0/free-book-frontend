import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [dropDown, setDropdown] = useState(false);

  const handleMobileDropdown = () => {
    setDropdown((prev) => !prev);
    console.log("Dropdown state:", !dropDown);
  };

  const categories = [
    { to: 'htmlbooks', title: 'HTML' },
    { to: 'cssbooks', title: 'CSS' },
    { to: 'jsbooks', title: 'JavaScript' },
    { to: 'pybooks', title: 'Python' },
    { to: 'dbbooks', title: 'Databases' },
    { to: 'perlbooks', title: 'Perl' },
  ];

  return (
    <div className="flex flex-col md:min-w-[15%] max-w-[23%] w-full h-full dark:bg-gray-900 dark:text-neutral-200">
      {/* Desktop Sidebar */}
      <div className="hidden h-screen md:flex flex-col gap-4 p-6 dark:bg-gray-900 border-r dark:border-gray-700 border-none">
        <Link to="/">
          <h1 className="mb-6 text-3xl font-extrabold tracking-tight dark:text-white">
            Free Book Archive
          </h1>
        </Link>
        <nav className="flex flex-col gap-2">
          {categories.map((category) => (
            <Link
              key={category.to}
              to={category.to}
              className="py-2 px-4 dark:text-gray-300 text-gray-900 rounded hover:bg-blue-600 hover:text-white transition-colors"
            >
              {category.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav className="bg-white dark:bg-gray-900 fixed sm:block md:hidden w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
              Free Books
            </span>
          </Link>
          <button
            onClick={handleMobileDropdown}
            className="p-2 w-10 h-10 text-gray-500 flex flex-col items-center justify-center rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={dropDown}
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
        </div>

        {/* Mobile Dropdown Menu */}
        {dropDown && (
          <div className="w-full flex items-center justify-center">
            <div
              className="flex flex-col p-4 w-[90%] mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              id="navbar-sticky"
            >
              {categories.map((category) => (
                <Link
                  key={category.to}
                  to={category.to}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-600 hover:transition-color dark:text-white dark:hover:bg-blue-600"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Sidebar;
