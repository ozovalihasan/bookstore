/* eslint-disable import/prefer-default-export */
import { ADD_BOOK } from './actionTypes';

export const addBook = (id, title, category) => ({
  type: ADD_BOOK,
  payload: {
    id,
    title,
    category,
  },
});
