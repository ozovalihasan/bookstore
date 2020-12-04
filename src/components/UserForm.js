import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

const UserForm = ({
  handleChange,
  handleSubmit,
  loading,
  username,
  password,
}) => (
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

UserForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool,
  username: PropTypes.bool,
  password: PropTypes.bool,
};

UserForm.defaultProps = {
  handleChange: () => '',
  handleSubmit: () => '',
  loading: false,
  username: '',
  password: '',
};

export default UserForm;
