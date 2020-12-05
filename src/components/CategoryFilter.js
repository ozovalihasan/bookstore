import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange, categories }) => (
  <select onChange={handleFilterChange} name="filter" className="category-filter main">
    {categories.map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CategoryFilter;
