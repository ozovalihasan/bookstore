import { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';
import { fetchUserAutoLogin } from '../redux';
import BookStoreHeader from './BookStoreHeader';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) dispatch(fetchUserAutoLogin());
  }, []);
  const user = useSelector(state => state.user);
  return (
    <div className="app main">
      {user.user || localStorage.token ? (
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
};

export default App;
