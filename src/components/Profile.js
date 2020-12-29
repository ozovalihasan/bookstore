import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Profile = ({ handleClick, user }) => (
  <div className="profile main">
    <div className="profile container">
      {
        (user.user) ? (
          <div className="profile user-container">

            <p className="profile user">
              Hi
              {' '}
              {user.user}
            </p>
            <button type="button" onClick={handleClick} className="profile logout-button">
              Logout
            </button>
          </div>
        ) : (
          <div className="profile sign">
            <Link to="/login" className="profile sign-buttons ">Login</Link>
            <Link to="/sign-up" className="profile sign-buttons ">Sign up</Link>
          </div>
        )
    }

    </div>
  </div>
);

Profile.propTypes = {
  handleClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    user: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
