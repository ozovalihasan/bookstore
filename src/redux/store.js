import { createStore } from 'redux';

import rootReducer from './rootReducer';

export const initialState = {
  book: [
    // {
    //   id: 1,
    //   title: 'MacBeth',
    //   category: 'History',
    // },
    // {
    //   id: 2,
    //   title: 'Rome and Juliet',
    //   category: 'History',
    // },
    // {
    //   id: 3,
    //   title: 'Introduction to React',
    //   category: 'Learning',
    // },
  ],

  filter: 'All',

};

const store = createStore(
  rootReducer,
  initialState,
);

export default store;
