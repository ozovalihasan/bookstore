import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
