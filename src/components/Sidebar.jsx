import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [dropDown, setDropdown] = useState(false);

  const handleMobileDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".mobile-nav-container") && !event.target.closest(".menu-button")) {
        closeDropdown();
      }
    };

    if (dropDown) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropDown]);

  const categories = [
    { to: '/', title: 'Home' },
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
      <div className="hidden h-screen md:flex flex-col gap-4 p-6 dark:bg-gray-900 border-r dark:border-gray-700">
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
      <nav className="bg-white fixed dark:bg-gray-900 md:hidden w-full z-10 border-b border-gray-200 dark:border-gray-600">
  <div className="flex items-center justify-between px-4 py-2">
    {/* Logo Section */}
    <Link to="/" className="flex items-center">
      <span className="text-xl font-bold whitespace-nowrap dark:text-white">
        Free Books
      </span>
    </Link>

    {/* Menu Button */}
    <button
      onClick={handleMobileDropdown}
      className="menu-button p-2 w-10 h-10 text-gray-500 flex items-center justify-center rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="mobile-nav"
      aria-expanded={dropDown}
    >
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  {/* Mobile Dropdown Menu */}
  {dropDown && (
    <div className="mobile-nav-container absolute top-14 left-0 w-full z-40 p-2 ">
      <div className="flex flex-col bg-gray-50 dark:bg-gray-800 p-6 border-t border-gray-200 rounded-md dark:border-gray-700 shadow-lg">
        {categories.map((category) => (
          <Link
            key={category.to}
            to={category.to}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-600 hover:transition-colors dark:text-white dark:hover:bg-blue-600"
            onClick={closeDropdown}
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
