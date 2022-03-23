import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="header-wrapper container">
        <h1 className="branding">
          Bookstore
        </h1>

        <nav>
          <ul>
            <li>
              <Link to="/">
                Books
              </Link>
            </li>
            <li>
              <Link to="/categories">
                Categories
              </Link>
            </li>
          </ul>
        </nav>

        <div className="user">
          <svg className="w-6 h-6" fill="currentColor" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </div>
      </div>
    </header>
  );
}
