import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../actions/index';

function Book({ book }) {
  const dispatch = useDispatch();
  const handleRemoveBook = () => dispatch(removeBook(book.id));
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="button" onClick={handleRemoveBook}>
          Remove Book
        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

Book.defaultProps = {
  book: { id: 1, title: '', category: '' },
};
export default Book;
