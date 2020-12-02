import React from 'react';
import UserForm from './UserForm';
import { fetchUserSignUp } from '../redux';

const SignUp = () => <UserForm fetchUser={fetchUserSignUp} />;

export default SignUp;
