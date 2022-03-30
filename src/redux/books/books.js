import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVE';
const BOOKS_FETCHED = 'bookstore/books/BOOKS_FETCHED';

export const addBook = (data) => ({
  type: ADD_BOOK,
  payload: {
    data,
  },
});

export const bookRemoved = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

export const removeBook = (id) => (dispatch) => {
  // call api to delete book with this id
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
    case BOOKS_FETCHED:
      return action.payload.books;
    case ADD_BOOK:
      return state.concat({
        id: uuidv4(),
        ...action.payload.data,
      });
    case REMOVE_BOOK:
      return removeBook(action.payload.id);
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}
