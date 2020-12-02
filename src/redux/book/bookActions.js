import { CREATE_BOOK, REMOVE_BOOK } from './bookTypes';

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
