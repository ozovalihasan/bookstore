import React from 'react';
import { useSelector } from 'react-redux';

function BooksList() {
  const allBooks = useSelector(state => state.book);
  return (
    <div>
      <h2>Books List</h2>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {allBooks.map(book => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.category}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default BooksList;
