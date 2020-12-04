import BooksList from '../container/BooksList';
import BooksFormContainer from '../container/BooksFormContainer';
import BookStoreHeader from './BookStoreHeader';

const BooksPage = () => (
  <div className="app main">
    <BookStoreHeader />
    <BooksList />
    <div className="app line"> </div>
    <BooksFormContainer />
  </div>
);

export default BooksPage;
