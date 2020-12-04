import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserAutoLogin } from '../redux';
import BooksPage from '../components/BooksPage';

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
    <Redirect to={{ pathname: '/login' }} />
  );
};

export default App;
