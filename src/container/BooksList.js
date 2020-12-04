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
  const filter = useSelector(state => state.filter);
  const handleRemoveBook = id => dispatch(fetchRemoveBooks(id));
  if (allBooks === undefined) return <Redirect to={{ pathname: '/login' }} />;
  const filterBooks = allBooks => (filter === 'All'
    ? allBooks
    : allBooks.filter(book => book.category === filter));

  return (
    <div>
      <div>
        {loading && <Loading /> }
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
};

export default BooksList;
