import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import './App.css';

export default function App() {
  const [books] = useState([
    {
      title: 'book 1',
    },
    {
      title: 'book 2',
    },
  ]);

  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<BooksPage books={books} />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
