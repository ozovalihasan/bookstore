import CategoryFilterContainer from '../container/CategoryFilterContainer';
import ProfileContainer from '../container/ProfileContainer';

const BookStoreHeader = () => (
  <div className="book-store-header main">
    <div className="book-store-header content">
      <h2 className="book-store-header title">BookStore CMS</h2>
      <h3 className="book-store-header categories">CATEGORIES</h3>
      <CategoryFilterContainer />
      <ProfileContainer />
    </div>
  </div>
);

export default BookStoreHeader;
