import { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserAutoLogin } from '../redux';
import BooksPage from './BooksPage';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) dispatch(fetchUserAutoLogin());
  }, []);

  const user = useSelector(state => state.user);

  if (user.user || localStorage.token) {
    return (
      <BooksPage />
    );
  }

  return (
    <Route>
      <Redirect to={{ pathname: '/login' }} />
    </Route>
  );
};

export default App;
