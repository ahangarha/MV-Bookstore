import React from 'react';
import BookList from '../components/BookList';
import AddBookForm from '../components/AddBookForm';
import './BooksPage.css';

export default function BooksPage() {
  const categories = [
    'Action',
    'Economy',
    'Novel',
    'Politics',
    'Science Fiction',
  ];

  return (
    <div id="books-page-wrapper">
      <BookList />
      <hr />
      <AddBookForm categories={categories} />
    </div>
  );
}
