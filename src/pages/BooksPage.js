import React from 'react';
import PropTypes from 'prop-types';
import BookList from '../components/BookList';
import AddBookForm from '../components/AddBookForm';
import './BooksPage.css';

export default function BooksPage({ books }) {
  return (
    <div id="books-page-wrapper">
      <BookList books={books} />
      <hr />
      <AddBookForm categories={[]} />
    </div>
  );
}

BooksPage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
};
