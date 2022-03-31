import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto my-10">
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
