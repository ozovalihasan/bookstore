import { combineReducers } from 'redux';
import bookReducer from './book/bookReducer';
import filterReducer from './filter/filterReducer';

const rootReducer = combineReducers({
  book: bookReducer,
  filter: filterReducer,
});

export default rootReducer;
