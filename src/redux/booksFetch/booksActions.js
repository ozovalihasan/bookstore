import axios from 'axios';
import serverUrl from '../serverUrl';
import {
  BOOKS_REQUEST,
  BOOKS_FAILURE,
  BOOK_CREATE,
  BOOKS_LIST,
  BOOK_DELETE,
  BOOKS_RESET,
} from './booksTypes';

export const booksRequest = () => ({
  type: BOOKS_REQUEST,
});

export const bookCreate = book => ({
  type: BOOK_CREATE,
  payload: book,
});

export const booksList = books => ({
  type: BOOKS_LIST,
  payload: books,
});

export const bookDelete = id => ({
  type: BOOK_DELETE,
  payload: { id },
});

export const booksFailure = error => ({
  type: BOOKS_FAILURE,
  payload: error,
});

export const booksReset = () => ({
  type: BOOKS_RESET,
});

export const fetchBooksAdd = (title, author, category, compeletePercentage) => dispatch => {
  dispatch(booksRequest());
  const config = {
    url: `${serverUrl}/books`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.token}`,
    },
    data: {
      title, author, category, complete_percentage: compeletePercentage,
    },
  };
  axios(config)
    .then(response => {
      dispatch(bookCreate(response.data));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(booksFailure(errorMsg));
    });
};

export const fetchAllBooks = () => dispatch => {
  dispatch(booksRequest());
  const config = {
    url: `${serverUrl}/books`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.token}`,
    },
  };
  axios(config)
    .then(response => {
      dispatch(booksList(response.data));
    })

    .catch(error => {
      const errorMsg = error.message;
      dispatch(booksFailure(errorMsg));
    });
};

export const fetchRemoveBooks = id => dispatch => {
  dispatch(booksRequest());
  const config = {
    url: `${serverUrl}/books/${id}`,
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.token}`,
    },
  };
  axios(config)
    .then(() => {
      dispatch(bookDelete(id));
    })

    .catch(error => {
      const errorMsg = error.message;
      dispatch(booksFailure(errorMsg));
    });
};
