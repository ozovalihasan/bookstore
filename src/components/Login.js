import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserForm from './UserForm';
import { fetchUserLogin } from '../redux';

const Login = () => {
  const user = useSelector(state => state.user);

  return user.user ? (<Redirect to={{ pathname: '/' }} />) : (
    <UserForm fetchUser={fetchUserLogin} />
  );
};

export default Login;
