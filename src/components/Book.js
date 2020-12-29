import PropTypes from 'prop-types';
import PieChartContainer from '../container/ProgressChartContainer';

const Book = ({ book, handleRemoveBook }) => (
  <div className="book main">
    <div className="book main-container">
      <div className="book information">
        <div className="book category">{book.category}</div>
        <div className="book title">{book.title}</div>
        <div className="book writer">{book.author}</div>
      </div>

      <div className="book buttons">
        <button
          className="book action-buttons button-remove"
          type="button"
          onClick={handleRemoveBook}
        >
          Remove
        </button>
      </div>
    </div>
    <PieChartContainer percentage={book.complete_percentage} bookId={book.id} />
    <div className="book progress">
      <div className="book current-text">CURRENT CHAPTER</div>
      <div className="book current-chapter">Chapter 17</div>
      <button
        type="button"
        className="book update-progress"
      >
        UPDATE PROGRESS
      </button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    complete_percentage: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
