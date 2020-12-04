import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchUserSignUp } from '../redux';
import UserFormContainer from '../container/UserFormContainer';

const SignUp = () => {
  const user = useSelector(state => state.user);

  return localStorage.token ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <UserFormContainer fetchUser={fetchUserSignUp} loading={user.loading} />
  );
};

export default SignUp;
