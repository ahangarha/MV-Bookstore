import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import Book from './Book';

export default function BookList() {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!books.length) dispatch(fetchBooks());
  }, []);

  if (books.length) {
    return (
      <ul className="flex flex-col gap-4">
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
