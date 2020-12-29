import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/index';
import CategoryFilter from '../components/CategoryFilter';

const CATEGORIES = [
  'All',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
const CategoryFilterContainer = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <CategoryFilter handleFilterChange={handleFilterChange} categories={CATEGORIES} />
  );
};

export default CategoryFilterContainer;
