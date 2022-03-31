import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../redux/books/books';

export default function AddBookForm({ categories }) {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState(categories[0] || '');

  const updateBookTitle = (e) => {
    e.preventDefault();
    setBookTitle(e.target.value);
  };

  const updateBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const updateCategory = (e) => {
    setBookCategory(e.target.value);
  };

  const dispatch = useDispatch();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-500 uppercase">
        Add new book
      </h2>
      <form
        className="flex items-center flex-wrap gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook({
            title: bookTitle.trim(),
            author: bookAuthor,
            category: bookCategory,
          }));
          setBookTitle('');
          setBookAuthor('');
        }}
      >
        <input
          type="text"
          name="title"
          value={bookTitle}
          onChange={updateBookTitle}
          className="px-4 py-3 border rounded bg-white min-w-[12rem] grow"
          placeholder="Book Title"
          pattern=".*\S+.*"
          required
        />
        <input
          type="text"
          name="author"
          value={bookAuthor}
          onChange={updateBookAuthor}
          className="px-4 py-3 border rounded bg-white min-w-[12rem] grow"
          placeholder="Author"
          pattern=".*\S+.*"
          required
        />
        <select
          name="category"
          value={bookCategory}
          onChange={updateCategory}
          className="px-4 py-3 border rounded bg-white min-w-[12rem] grow"
        >
          {
            categories.map((cat) => (
              <option value={cat} key={cat}>{cat}</option>
            ))
          }
        </select>
        <button
          type="submit"
          className="h-12 w-44 px-4 grid place-content-center font-serif border rounded bg-blue-500 text-white uppercase text-sm font-bold"
        >
          Add book
        </button>
      </form>
    </section>
  );
}

AddBookForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
