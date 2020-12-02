import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserForm from './UserForm';
import { fetchUserSignUp } from '../redux';

const SignUp = () => {
  const user = useSelector(state => state.user);

  return user.user ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <UserForm fetchUser={fetchUserSignUp} loading={user.loading} />
  );
};

export default SignUp;
