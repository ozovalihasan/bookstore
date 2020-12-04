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
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default UserForm;
