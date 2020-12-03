import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';
import BookStoreHeader from './BookStoreHeader';
// import Login from './Login';

function App() {
  // const user = useSelector(state => state.user);

  return (
    <div className="app main">
      {localStorage.token ? (
        <>
          <BookStoreHeader />
          <BooksList />
          <div className="app line"> </div>
          <BooksForm />
        </>
      ) : (
        <Route>
          <Redirect to={{ pathname: '/login' }} />
        </Route>
      )}
    </div>

  );
}

export default App;
