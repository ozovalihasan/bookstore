import {
  BOOKS_REQUEST,
  BOOK_CREATE,
  BOOKS_FAILURE,
  BOOKS_LIST,
  BOOK_DELETE,
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
        loading: false,
        ...state,
        books: action.payload,
        error: '',
      };

    case BOOK_DELETE:
      console.log(action.payload);
      return {
        loading: false,
        ...state,
        books: state.books.filter(book => book.id !== action.payload.id),
        error: '',
      };

    default:
      return state;
  }
};

export default reducer;
