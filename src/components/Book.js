import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../actions/index';

function Book({ id, title, category }) {
  const dispatch = useDispatch();
  const handleRemoveBook = () => dispatch(removeBook(id));
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={handleRemoveBook}>Remove Book</button></td>
    </tr>
  );
}

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  id: 1,
  title: '',
  category: '',
};
export default Book;
