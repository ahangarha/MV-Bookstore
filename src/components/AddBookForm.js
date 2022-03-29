import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../redux/books/books';
import './AddBookForm.css';

export default function AddBookForm({ categories }) {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const updateBookTitle = (e) => {
    e.preventDefault();
    setBookTitle(e.target.value);
  };

  const updateBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  return (
    <section id="form-section">
      <h2>Add new book</h2>
      <form
        id="add-book-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook({
            title: bookTitle.trim(),
            author: bookAuthor,
          }));
          setBookTitle('');
        }}
      >
        <input
          type="text"
          name="title"
          value={bookTitle}
          onChange={updateBookTitle}
          placeholder="Book Title"
          pattern=".*\S+.*"
          required
        />
        <input
          type="text"
          name="author"
          value={bookAuthor}
          onChange={updateBookAuthor}
          placeholder="Author"
          pattern=".*\S+.*"
          required
        />
        <select name="category">
          {
            categories.forEach((cat) => (
              <option value="volvo">{cat.title}</option>
            ))
          }
        </select>
        <button type="submit">Add book</button>
      </form>
    </section>
  );
}

AddBookForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
