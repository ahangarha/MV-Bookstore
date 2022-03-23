import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

export default function Book({ book }) {
  return (
    <li className="book-item">
      {book.title}
      <button type="button">
        Remove
      </button>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
