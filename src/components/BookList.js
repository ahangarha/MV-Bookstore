import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './BookList.css';

export default function BookList({ books }) {
  if (books.length) {
    return (
      <ul id="book-list">
        {
          books.map((book) => (
            <Book book={book} key={book} />
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

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
};
