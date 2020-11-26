import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

function BooksList() {
  const allBooks = useSelector(state => state.book);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleRemoveBook = id => dispatch(removeBook(id));

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
                book={book}
                handleRemoveBook={() => handleRemoveBook(book.id)}
              />
            ))}
        </tbody>
      </table>
      <CategoryFilter />
    </div>
  );
}

export default BooksList;
