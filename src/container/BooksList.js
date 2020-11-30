import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BooksList() {
  const allBooks = useSelector(state => state.book);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleRemoveBook = id => dispatch(removeBook(id));

  const filterBooks = allBooks => (filter === 'All'
    ? allBooks
    : allBooks.filter(book => book.category === filter));

  return (
    <div>
      <div>
        {filterBooks(allBooks).map(book => (
          <Book
            key={book.id}
            book={book}
            handleRemoveBook={() => handleRemoveBook(book.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BooksList;
