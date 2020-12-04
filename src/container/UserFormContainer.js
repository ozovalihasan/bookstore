import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import UserForm from '../components/UserForm';

const UserFormContainer = ({ fetchUser, loading }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (username && password) {
      dispatch(fetchUser(username, password));
    }
  };

  const handleChange = e => {
    if (e.target.name === 'username') setUsername(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  };

  return (
    <UserForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      loading={loading}
      username={username}
      password={password}
    />
  );
};

UserFormContainer.propTypes = {
  fetchUser: PropTypes.func,
  loading: PropTypes.bool,
};

UserFormContainer.defaultProps = {
  fetchUser: () => '',
  loading: false,
};

export default UserFormContainer;