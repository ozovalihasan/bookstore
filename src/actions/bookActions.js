/* eslint-disable import/prefer-default-export */
import { CREATE_BOOK } from './actionTypes';

export const addBook = (title, category) => ({
  type: CREATE_BOOK,
  payload: {
    title,
    category,
  },
});
