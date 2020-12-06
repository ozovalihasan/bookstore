import {
  BOOKS_REQUEST,
  BOOK_CREATE,
  BOOKS_FAILURE,
  BOOKS_LIST,
  BOOK_UPDATE_PROGRESS,
  BOOK_DELETE,
  BOOKS_RESET,
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
        loading: false,
        books: action.payload,
        error: '',
      };

    case BOOK_UPDATE_PROGRESS:
      return {
        ...state,
        loading: false,
        books: state.books.map(book => {
          if (book.id === action.payload.id) {
            return action.payload;
          }
          return book;
        }),
        error: '',
      };

    case BOOK_DELETE:
      return {
        ...state,
        loading: false,
        books: state.books.filter(book => book.id !== action.payload.id),
        error: '',
      };

    case BOOKS_RESET:
      return {
        loading: false,
        books: [],
        initialized: false,
        error: '',
      };

    default:
      return state;
  }
};

export default reducer;
