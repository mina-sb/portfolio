import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sideNavRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  function handleClickOutside(event) {
    if (
      sideNavRef.current &&
      !sideNavRef.current.contains(event.target) &&
      !event.target?.closest('button')?.classList?.contains('menuBtn')
    ) {
      setIsOpen(false)
    }
  }

  return (
    <header className="header">
      <NavLink to="/" className="navbar-logo-link">
        <p className="navbar-logo">M</p>
      </NavLink>
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        class="menuBtn navbar-btn"
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
      <div
        ref={sideNavRef}
        className={`navbar-side-menu ${isOpen ? 'translate-x-0' : '-translate-x-[100%]'}`}
      >
        <NavLink to="/" className="navbar-logo-link">
          <p className="navbar-logo">M</p>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? 'gold-gradient-text' : 'text-white'} block mb-3 mt-3 font-bold`
          }
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? 'gold-gradient-text' : 'text-white'} block mb-3 ont-bold`
          }
          onClick={toggleMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActive ? 'gold-gradient-text' : 'text-white'} block  mb-3  font-bold`
          }
          onClick={toggleMenu}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? 'gold-gradient-text' : 'text-white'} block mb-3  font-bold`
          }
          onClick={toggleMenu}
        >
          Contact
        </NavLink>
      </div>

      <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <nav className="flex text-lg gap-7 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'gold-gradient-text font-bold' : 'text-white')}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'gold-gradient-text font-bold' : 'text-white')}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'gold-gradient-text font-bold' : 'text-white')}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'gold-gradient-text font-bold' : 'text-white')}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
