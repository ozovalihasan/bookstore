import React from 'react';
import { Provider } from 'react-redux';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BooksList />
        <BooksForm />
      </div>
    </Provider>
  );
}

export default App;
