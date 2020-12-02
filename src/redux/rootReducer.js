import { combineReducers } from 'redux';
import bookReducer from './book/bookReducer';
import filterReducer from './filter/filterReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  book: bookReducer,
  filter: filterReducer,
  user: userReducer,
});

export default rootReducer;
