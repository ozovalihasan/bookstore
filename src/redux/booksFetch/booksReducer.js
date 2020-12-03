import {
  BOOKS_REQUEST,
  BOOK_CREATE,
  BOOKS_FAILURE,
  BOOKS_LIST,
} from './booksTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKS_REQUEST:
      return {
        ...state,
        initialized: true,
        loading: true,
        error: '',
      };

    case BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case BOOK_CREATE:
      return {
        ...state,
        loading: false,
        books: [...state.books, action.payload],
        error: '',
      };

    case BOOKS_LIST:
      return {
        ...state,
        books: action.payload,
        error: '',
      };

    default:
      return state;
  }
};

export default reducer;
