import { combineReducers } from 'redux';
import booksReducer from './booksFetch/booksReducer';
import filterReducer from './filter/filterReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
  user: userReducer,
});

export default rootReducer;
