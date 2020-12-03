import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
// import { removeBook } from '../redux/index';
import { removeBook, fetchAllBooks } from '../redux/index';

function BooksList() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  if (books.initialized === false) dispatch(fetchAllBooks());
  const allBooks = books.books;
  const filter = useSelector(state => state.filter);
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
