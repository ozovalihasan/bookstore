import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

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
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
