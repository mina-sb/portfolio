import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (
      sideNavRef.current &&
      !sideNavRef.current.contains(event.target) &&
      !event.target?.closest("button")?.classList?.contains("menuBtn")
    ) {
      setIsOpen(false);
    }
  }

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="font-bold text-xl blue-gradient_text">M</p>
      </NavLink>
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        class="menuBtn inline-flex items-center p-2 w-10 h-10  justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
        onClick={toggleMenu}
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      {
        <div
          ref={sideNavRef}
          className={`fixed bg-opacity-95 shadow-[rgba(0,0,5,0.1)_6px_5px_4px_0px]  md:hidden left-0 top-0 w-[60%] h-full pl-8 pt-8 bg-slate-600 ease-in-out transition-[margin-left] duration-300 
          ${isOpen ? "ml-0 " : "ml-[-250px]"}`}
        >
          <span
            to="/"
            className="w-10 h-10 -mt-4 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
          >
            <p className="font-bold text-xl blue-gradient_text">M</p>
          </span>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "blue-gradient_text font-bold" : "text-white block"
              } block mb-3 mt-3`
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "blue-gradient_text font-bold" : "text-white block"
              } block mb-3`
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${
                isActive ? "blue-gradient_text font-bold" : "text-white block"
              } block  mb-3`
            }
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "blue-gradient_text font-bold" : "text-white block"
              } block mb-3`
            }
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      }

      <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <nav className="flex text-lg gap-7 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "blue-gradient_text font-bold" : "text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "blue-gradient_text font-bold" : "text-white"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "blue-gradient_text font-bold" : "text-white"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "blue-gradient_text font-bold" : "text-white"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
