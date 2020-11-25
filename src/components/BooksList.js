import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

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
          <Book id={book.id} title={book.title} category={book.category} />
        ))}
      </table>
    </div>
  );
}

export default BooksList;
