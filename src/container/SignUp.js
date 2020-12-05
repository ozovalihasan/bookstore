import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchUserSignUp } from '../redux';
import UserFormContainer from './UserFormContainer';

const SignUp = () => {
  const user = useSelector(state => state.user);

  return localStorage.token ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <UserFormContainer fetchUser={fetchUserSignUp} loading={user.loading} buttonName="Sign Up" />
  );
};

export default SignUp;
