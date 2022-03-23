import React from 'react';
import PropTypes from 'prop-types';
import './AddBookForm.css';

export default function AddBookForm({ categories }) {
  return (
    <section id="form-section">
      <h2>Add new book</h2>
      <form id="add-book-form">
        <input type="text" name="title" required />
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
