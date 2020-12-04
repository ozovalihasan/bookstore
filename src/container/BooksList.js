import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Book from '../components/Book';
import Loading from '../components/Loading';
import { fetchRemoveBooks, fetchAllBooks } from '../redux/index';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const { loading } = books;
  if (books.initialized === false) dispatch(fetchAllBooks());
  const allBooks = books.books;

  const bookFilter = useSelector(state => state.filter);
  const handleRemoveBook = id => dispatch(fetchRemoveBooks(id));
  if (allBooks === undefined) return <Redirect to={{ pathname: '/login' }} />;
  const filterBooks = allBooks => (bookFilter === 'All'
    ? allBooks
    : allBooks.filter(book => book.category === bookFilter));

  return (
    <>
      {loading && <Loading /> }
      {filterBooks(allBooks).map(book => (
        <Book
          key={book.id}
          book={book}
          handleRemoveBook={() => handleRemoveBook(book.id)}
        />
      ))}
    </>
  );
};

export default BooksList;
