// import React from 'react';
// import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSignOut, booksReset } from '../redux';

const SignOut = () => {
  const dispatch = useDispatch();
  dispatch(userSignOut());
  // return <Redirect to={{ pathname: '/login' }} />;
  return null;
};

export default SignOut;
