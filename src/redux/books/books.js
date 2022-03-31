import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD';
const BOOK_ADDED = 'bookstore/books/ADDED';
const REMOVE_BOOK = 'bookstore/books/REMOVE';
const BOOK_REMOVED = 'bookstore/books/REMOVED';
const FETCH_BOOKS = 'bookstore/books/FETCH';
const BOOKS_FETCHED = 'bookstore/books/FETCHED';

const bookAdded = (book) => ({
  type: BOOK_ADDED,
  payload: {
    book,
  },
});

export const addBook = (data) => (dispatch) => {
  const book = {
    item_id: uuidv4(),
    title: data.title,
    author: data.author,
    category: data.category || '',
  };

  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gKNxtZf3AJCaGnNUdIGw/books';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  fetch(URL, options)
    .then((res) => {
      if (res.status === 201) dispatch(bookAdded(book));
    });
};

export const bookRemoved = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

export const removeBook = (id) => (dispatch) => {
  let URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gKNxtZf3AJCaGnNUdIGw/books/';
  URL += id;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      book_id: id,
    }),
  };

  fetch(URL, options)
    .then((res) => {
      if (res.status === 201) dispatch(bookRemoved(id));
    });
};

const booksFetched = (books) => ({
  type: BOOKS_FETCHED,
  payload: {
    books,
  },
});

export const fetchBooks = () => (dispatch) => {
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gKNxtZf3AJCaGnNUdIGw/books';

  fetch(URL)
    .then((res) => res.json())
    .then((books) => {
      const booksList = Object.keys(books).map((bookID) => ({
        id: bookID,
        ...books[bookID][0],
      }));
      dispatch(booksFetched(booksList));
    });
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return fetchBooks();
    case BOOKS_FETCHED:
      return action.payload.books;
    case ADD_BOOK:
      return addBook(action.payload.data);
    case BOOK_ADDED:
      return state.concat({
        id: action.payload.book.item_id,
        title: action.payload.book.title,
        author: action.payload.book.author,
        category: action.payload.book.category,
      });
    case REMOVE_BOOK:
      return removeBook(action.payload.id);
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}
