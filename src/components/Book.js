import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import './Book.css';

export default function Book({ book }) {
  const dispatch = useDispatch();

  return (
    <li className="book-item">
      {book.title}
      {' by '}
      {book.author}
      <button
        type="button"
        onClick={() => {
          dispatch(removeBook(book.id));
        }}
      >
        Remove
      </button>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
