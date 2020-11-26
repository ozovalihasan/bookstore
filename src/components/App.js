import React from 'react';
import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';

function App() {
  return (
    <div>
      <BooksList />
      <div className="app line"></div>
      <BooksForm />
    </div>
  );
}

export default App;
