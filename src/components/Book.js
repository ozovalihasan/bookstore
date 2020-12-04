import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="book main">
    <div className="book main-container">
      <div className="book information">
        <div className="book category">{book.category}</div>
        <div className="book title">{book.title}</div>
        <div className="book writer">{book.author}</div>
      </div>

      <div className="book buttons">
        <button type="button" className="book action-buttons">
          Comments
        </button>
        <button
          className="book action-buttons button-remove"
          type="button"
          onClick={handleRemoveBook}
        >
          Remove
        </button>
        <button className="book action-buttons button-edit" type="button">
          Edit
        </button>
      </div>
    </div>
    <div className="book percentage-container">
      <div className="book percentage">
        <div className="book oval"> </div>
      </div>
      <div className="book percentage-subcontainer">
        <div className="book percentage-text">
          {book.complete_percentage}
          %
        </div>
        <div className="book percentage-status">Completed</div>
      </div>
    </div>
    <div className="book progress">
      <div className="book current-text">CURRENT CHAPTER</div>
      <div className="book current-chapter">Chapter 17</div>
      <button type="button" className="book update-progress">
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
  }),
  handleRemoveBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {
    id: 1, title: '', author: '', category: '', complete_percentage: '0',
  },
};
export default Book;
