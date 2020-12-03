import axios from 'axios';
import {
  BOOKS_REQUEST,
  BOOKS_FAILURE,
  BOOK_CREATE,
  BOOKS_LIST,
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

export const booksFailure = error => ({
  type: BOOKS_FAILURE,
  payload: error,
});

export const fetchBooksAdd = (title, author, category, compeletePercentage) => dispatch => {
  dispatch(booksRequest());
  const config = {
    url: 'http://127.0.0.1:4000/books',
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
      console.log(response);
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
    url: 'http://127.0.0.1:4000/books',
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.token}`,
    },
  };
  axios(config)
    .then(response => {
      console.log(response);
      dispatch(booksList(response.data));
    })

    .catch(error => {
      const errorMsg = error.message;
      dispatch(booksFailure(errorMsg));
    });
};

// const getBooks = fetch('http://127.0.0.1:4000/books', {
//   method: 'get',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `bearer ${JWT_TOKEN}`,
//   },
//   // body: JSON.stringify(),
// })
//   .then(res => res.json())
//   .then(res => console.log(res));
