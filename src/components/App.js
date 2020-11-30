import React from 'react';
import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';
import BookStoreHeader from './BookStoreHeader';

function App() {
  return (
    <div className="app main">
      <BookStoreHeader />
      <BooksList />
      <div className="app line"> </div>
      <BooksForm />
    </div>
  );
}

export default App;
