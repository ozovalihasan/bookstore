import CategoryFilterContainer from '../container/CategoryFilterContainer';

const BookStoreHeader = () => (
  <div className="book-store-header main">
    <div className="book-store-header content">
      <h1>BookStore CMS</h1>
      <h3>BOOKS</h3>
      <h3>CATEGORIES</h3>
      <CategoryFilterContainer />
    </div>
  </div>
);

export default BookStoreHeader;
