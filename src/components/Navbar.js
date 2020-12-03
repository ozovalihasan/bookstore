import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignOut } from '../redux';

function Navbar() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  console.log(user);

  const handleClick = () => {
    localStorage.removeItem('token');
    dispatch(userSignOut());
  };

  return (
    <div className="navbar main">
      <ul className="navbar container">
        <h2 className="navbar title">Bookstore</h2>
        {
          (user.user) ? (
            <li>
              <button type="button" onClick={handleClick}>
                Logout
              </button>
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
        |
        <li>
          <Link to="/">Books</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
