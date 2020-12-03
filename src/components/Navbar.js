import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar main">
      <ul className="navbar container">
        <h2 className="navbar title">Math Magicians</h2>
        <li>
          <Link to="/login">Login</Link>
        </li>
        |
        <li>
          <Link to="/sign-up">Sign up</Link>
        </li>
        |
        <li>
          <Link to="/sign-out">Sign-out</Link>
        </li>
        |
        <li>
          <Link to="/">Books</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
