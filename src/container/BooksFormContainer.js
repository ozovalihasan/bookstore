import { useState } from 'react';
import { useDispatch } from 'react-redux';
import BooksForm from '../components/BooksForm';
import { fetchBooksAdd } from '../redux/index';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
const BooksFormContainer = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [completePercentage, setCompletePercentage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title && author && category && completePercentage) {
      dispatch(fetchBooksAdd(title, author, category, completePercentage));
      e.target.reset();
    }
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'author':
        setAuthor(e.target.value);
        break;
      case 'category':
        setCategory(e.target.value);
        break;
      case 'completePercentage':
        setCompletePercentage(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <BooksForm handleChange={handleChange} handleSubmit={handleSubmit} categories={categories} />
  );
};

export default BooksFormContainer;
