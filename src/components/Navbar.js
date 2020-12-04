import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ handleClick, user }) {
  return (
    <div className="navbar main">
      <ul className="navbar container">
        {
          (user.user) ? (
            <li>
              <button type="button" onClick={handleClick}>
                Logout
              </button>
              <p>
                hi
                {' '}
                {user.user}
              </p>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              |
              <li>
                <Link to="/sign-up">Sign up</Link>
              </li>
            </>
          )
        }

      </ul>
    </div>
  );
}

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    user: PropTypes.string.isRequired,
  }),
};

Navbar.defaultProps = {
  user: { user: '' },
};

export default Navbar;
