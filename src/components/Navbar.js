import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignOut, booksReset } from '../redux';

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleClick = () => {
    localStorage.removeItem('token');
    dispatch(booksReset());
    dispatch(userSignOut());
  };

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

export default Navbar;
