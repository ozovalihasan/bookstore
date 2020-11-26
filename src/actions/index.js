/* import/prefer-default-export */
import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './actionTypes';

export const addBook = (title, category) => ({
  type: CREATE_BOOK,
  payload: {
    title,
    category,
  },
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

export const changeFilter = category => ({
  type: CHANGE_FILTER,
  payload: {
    category,
  },
});
