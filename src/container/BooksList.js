import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

function BooksList() {
  const allBooks = useSelector(state => state.book);
  return (
    <div>
      <h2>Books List</h2>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>  </th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
