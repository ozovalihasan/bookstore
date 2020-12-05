import PropTypes from 'prop-types';

const BooksForm = ({
  handleChange, handleSubmit, categories, completePercentage,
}) => (
  <div className="books-form main">
    <div className="books-form add-text ">ADD NEW BOOK</div>
    <form onSubmit={handleSubmit} className="books-form form-main ">
      <div className="books-form form-inputs">
        <input
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Book title"
          className="books-form input "
          required
        />
        <input
          name="author"
          onChange={handleChange}
          type="text"
          placeholder="Book author"
          className="books-form input "
          required
        />

        <select
          className="books-form input select-category "
          onChange={handleChange}
          name="category"
          required
        >
          <option disabled value>
            Select a category
          </option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          className="books-form input "
          name="completePercentage"
          onChange={handleChange}
          type="text"
          value={completePercentage}
          placeholder="Percentage of Completed Part"
          required
        />
      </div>
      <button type="submit" className="books-form add-book ">
        ADD BOOK
      </button>
    </form>
  </div>
);

BooksForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  completePercentage: PropTypes.string.isRequired,
};

export default BooksForm;
