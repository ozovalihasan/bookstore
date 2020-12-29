import BooksList from '../container/BooksList';
import BooksFormContainer from '../container/BooksFormContainer';
import BookStoreHeader from './BookStoreHeader';

const BooksPage = () => (
  <div className="books-page main">
    <BookStoreHeader />
    <BooksList />
    <div className="books-page line"> </div>
    <BooksFormContainer />

  </div>
);

export default BooksPage;
