import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const navbarlinks = [
  { id: 1, title: "Inicio", link: "/" },
  { id: 2, title: "Catalogo", link: "/catalogo" }, 
  { id: 3, title: "Quienes somos", link: "/quienes-somos" },
  { id: 4, title: "Contacto", link: "/contacto" },
];

const navbarRedes = [
  { id: 1, title: "Facebook", link: "https://www.facebook.com/", icon: "bi bi-facebook" },
  { id: 2, title: "Instagram", link: "https://www.instagram.com/", icon: "bi bi-instagram" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 bg-yellow-300/30 w-full backdrop-blur-md z-50">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo del sitio" className="w-[100px]" />
        </div>

        {/* Botón responsive */}
        <button onClick={toggleMenu} className="md:hidden text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navegación Desktop */}
        <div className="hidden md:block">
          <ul className="flex sm:space-x-8 space-x-4">
            {navbarlinks.map((link) => (
              <li key={link.id}>
                {link.title === "Inicio" ? (
                  <Link
                    className="text-gray-900 sm:text-lg text-sm hover:text-purple-600 transition-transform hover:scale-110 transform inline-block duration-300"
                    to="/"
                  >
                    {link.title}
                  </Link>
                ) : link.title === "Catalogo" ? ( // <- nueva condición
                  <Link
                    className="text-gray-900 sm:text-lg text-sm hover:text-purple-600 transition-transform hover:scale-110 transform inline-block duration-300"
                    to="/catalogo"
                  >
                    {link.title}
                  </Link>
                ) : link.title === "Quienes somos" || link.title === "Contacto" ? (
                  <Link
                    className="text-gray-900 sm:text-lg text-sm hover:text-purple-600 transition-transform hover:scale-110 transform inline-block duration-300"
                    to={link.title === "Quienes somos" ? "/quienes-somos" : "/contacto"}
                  >
                    {link.title}
                  </Link>
                ) : (
                  <a
                    className="text-gray-900 sm:text-lg text-sm hover:text-purple-600 transition-transform hover:scale-110 transform inline-block duration-300"
                    href={link.link}
                  >
                    {link.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Redes Desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                  href={link.link}
                >
                  <i
                    className={`${link.icon} sm:text-2x1 text-lg text-gray-900 hover:text-purple-600 transition-all duration-300`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navegación Móvil */}
      <div
        className={`md:hidden absolute w-full bg-yellow-50/30 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {navbarlinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              {link.title === "Inicio" ? (
                <Link
                  className="text-gray-900 hover:text-purple-600"
                  to="/"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ) : link.title === "Catalogo" ? ( // <- nueva condición
                <Link
                  className="text-gray-900 hover:text-purple-600"
                  to="/catalogo"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ) : link.title === "Quienes somos" || link.title === "Contacto" ? (
                <Link
                  className="text-gray-900 hover:text-purple-600"
                  to={link.title === "Quienes somos" ? "/quienes-somos" : "/contacto"}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ) : (
                <a
                  className="text-gray-900 hover:text-purple-600"
                  href={link.link}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        <ul className="flex space-x-4 px-4 py-2 border-t border-gray-950 justify-center">
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                href={link.link}
                onClick={() => setIsOpen(false)}
              >
                <i
                  className={`${link.icon} text-lg text-gray-900 hover:text-purple-600`}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



