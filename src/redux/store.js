import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export const initialState = {
  books: {
    loading: false,
    books: [],
    initialized: false,
    error: '',
  },

  filter: 'All',

  user: {
    loading: false,
    user: '',
    error: '',
  },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
