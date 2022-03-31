import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto h-24 flex items-center gap-4">
        <h1 className="text-3xl font-bold text-blue-500">
          Bookstore CMS
        </h1>

        <nav className="grow uppercase">
          <ul className="flex items-center">
            <li>
              <Link
                to="/"
                className="p-2 inline-block text-gray-400 hover:text-gray-800"
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="p-2 inline-block text-gray-400 hover:text-gray-800"
              >
                Categories
              </Link>
            </li>
          </ul>
        </nav>

        <div className="border rounded-full p-2 text-blue-500">
          <svg className="w-6 h-6" fill="currentColor" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </div>
      </div>
    </header>
  );
}
