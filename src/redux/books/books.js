const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';

export const addBook = (data) => ({
  type: ADD_BOOK,
  payload: {
    data,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat({
        ...action.payload.data,
      });
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}
