import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-brand-900 text-white shadow-lg fixed w-full z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-0 pl-8">
          <img src="/logo.svg" alt="Aciprobe Logo" className="w-20 h-20 m-0" />

          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold transition-colors border-b-2 border-accent-500 pb-1"
                  : "text-brand-200 hover:text-white font-medium transition-colors hover:border-b-2 hover:border-accent-500 pb-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold transition-colors border-b-2 border-accent-500 pb-1"
                  : "text-brand-200 hover:text-white font-medium transition-colors hover:border-b-2 hover:border-accent-500 pb-1"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold transition-colors border-b-2 border-accent-500 pb-1"
                  : "text-brand-200 hover:text-white font-medium transition-colors hover:border-b-2 hover:border-accent-500 pb-1"
              }
            >
              About
            </NavLink>
          </div>

          <div className="hidden md:flex">
            <NavLink
              to="/contact"
              className="bg-accent-500 hover:brightness-95 text-brand-900 font-semibold px-6 py-2 rounded-full transition-colors shadow-md w-fit inline-block"
            >
              Get In Touch
            </NavLink>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-brand-100 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pl-4 py-4 border-t border-brand-800">
            <div className="flex flex-col space-y-4">
              <NavLink
                onClick={toggleMenu}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold transition-colors"
                    : "text-brand-200 hover:text-white font-medium transition-colors"
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold transition-colors"
                    : "text-brand-200 hover:text-white font-medium transition-colors"
                }
              >
                Services
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold transition-colors"
                    : "text-brand-200 hover:text-white font-medium transition-colors"
                }
              >
                About
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                to="/contact"
                className="bg-accent-500 hover:brightness-95 text-brand-900 font-semibold pl-1 pr-2 py-1 transition-colors shadow-md w-fit inline-block"
              >
                Get In Touch
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
