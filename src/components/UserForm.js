import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from './Loading';

const UserForm = ({ fetchUser, loading }) => {
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
    <form onSubmit={handleSubmit}>
      {loading && <Loading /> }
      <input
        onChange={handleChange}
        type="text"
        name="username"
        value={username}
      />
      <input
        onChange={handleChange}
        type="text"
        name="password"
        value={password}
      />
      <button type="submit"> Login</button>
    </form>
  );
};

UserForm.propTypes = {
  fetchUser: PropTypes.func,
  loading: PropTypes.bool,
};

UserForm.defaultProps = {
  fetchUser: () => '',
  loading: false,
};

export default UserForm;
