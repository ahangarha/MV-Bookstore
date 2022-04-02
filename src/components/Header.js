import React from 'react';
import { NavLink } from 'react-router-dom';

const generateNavLinkStyle = ({ isActive }) => {
  const baseNavLinkStyle = 'text-sm md:text-base px-2 py-4 md:p-4 inline-block text-gray-400 hover:text-gray-800';
  const activeStyle = isActive ? 'text-gray-800' : '';
  return `${baseNavLinkStyle} ${activeStyle}`;
};

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto h-24 flex items-center gap-4 px-4">
        <h1 className="text-xl sm:text-3xl font-bold text-blue-500">
          Bookstore CMS
        </h1>

        <nav className="grow uppercase">
          <ul className="flex items-center justify-end md:justify-start">
            <li>
              <NavLink
                to="/"
                className={generateNavLinkStyle}
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={generateNavLinkStyle}
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={generateNavLinkStyle}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block border rounded-full p-2 text-blue-500">
          <svg className="w-6 h-6" fill="currentColor" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </div>
      </div>
    </header>
  );
}
