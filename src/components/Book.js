import React from 'react';
import PropTypes from 'prop-types';

function Book({ id, title, category }) {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
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
