/* eslint-disable import/prefer-default-export */
import { ADD_BOOK } from './actionTypes';

export const addBook = (title, category) => ({
  type: ADD_BOOK,
  payload: {
    title,
    category,
  },
});
