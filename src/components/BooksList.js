import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import CategoryFilter from './CategoryFilter';

function BooksList() {
  const allBooks = useSelector(state => state.book);
  const filter = useSelector(state => state.filter);

  return (
    <div>
      <h2>Books List</h2>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {allBooks
            .filter(book => {
              if (filter !== 'All') {
                if (book.category === filter) {
                  return true;
                }
                return false;
              }
              return true;
            })
            .map(book => (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                category={book.category}
              />
            ))}
        </tbody>
      </table>
      <CategoryFilter />
    </div>
  );
}

export default BooksList;
