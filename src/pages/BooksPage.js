import React from 'react';
import BookList from '../components/BookList';
import AddBookForm from '../components/AddBookForm';
import './BooksPage.css';

export default function BooksPage() {
  return (
    <div id="books-page-wrapper">
      <BookList />
      <hr />
      <AddBookForm categories={[]} />
    </div>
  );
}
