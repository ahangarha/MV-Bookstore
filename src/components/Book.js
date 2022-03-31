import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();

  return (
    <li className="bg-white border rounded p-6 grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-2 lg:col-span-1 flex flex-col lg:border-0 border-b pb-4 lg:pb-0">
        <p className="font-bold text-gray-500 text-sm">
          {book.category || 'Uncategorized'}
        </p>
        <p className="font-serif text-gray-900 font-bold text-2xl">
          {book.title}
        </p>
        <p className="font-serif font-light text-blue-500">
          {book.author}
        </p>
        <div className="flex font-serif gap-4 mt-4">
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(book.id));
            }}
            className="pr-3 border-r text-blue-500"
          >
            Comments
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(book.id));
            }}
            className="pr-3 border-r text-blue-500"
          >
            Remove
          </button>
          <button
            type="button"
            className="pr-3 text-blue-500"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="border-r flex justify-center items-center gap-4 self-center">
        <svg className="w-20" fill="none" stroke="currentColor" strokeWidth="7" viewBox="0 0 100 100">
          <path className="text-gray-200" strokeDasharray="250,0" d="M50 10a40 40 0 0 1 0 80 40 40 0 0 1 0-80" />
          <path className="text-blue-500" strokeDasharray="180,180" d="M50 10a40 40 0 0 1 0 80 40 40 0 0 1 0-80" />
        </svg>
        <div className="flex flex-col">
          <span
            className="text-3xl text-gray-900"
          >
            70%
          </span>
          <span
            className="text-sm text-gray-500"
          >
            Completed
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2 font-serif sm:pl-8 md:pl-12">
        <p className="text-gray-400 text-sm uppercase">
          Current chapter
        </p>
        <p className="text-gray-900">
          Chapter 1
        </p>
        <button
          type="button"
          className="w-44 px-4 py-2 mt-4 grid place-content-center font-serif border rounded bg-blue-500 text-white uppercase text-sm"
        >
          Update Progress
        </button>
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
