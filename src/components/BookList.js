import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import './BookList.css';

export default function BookList() {
  const books = useSelector((state) => state.books);

  if (books.length) {
    return (
      <ul id="book-list">
        {
          books.map((book) => (
            <Book book={book} key={book.id} />
          ))
        }
      </ul>
    );
  }

  return (
    <>
      There is no books to show.
    </>
  );
}
