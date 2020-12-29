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

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setCategory(categories[0]);
    setCompletePercentage('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    ['title', 'author', 'category', 'completePercentage'].forEach(elem => {
      e.target.elements[elem].required = true;
    });

    if (title && author && category && completePercentage) {
      dispatch(fetchBooksAdd(title, author, category, completePercentage));
      resetForm();
      ['title', 'author', 'category', 'completePercentage'].forEach(elem => {
        e.target.elements[elem].required = false;
      });
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
        if (e.target.value >= 0
          && e.target.value <= 100
          && e.target.value.length <= 4
        ) { setCompletePercentage(e.target.value); }
        break;

      default:
        break;
    }
  };

  return (
    <BooksForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      categories={categories}
      title={title}
      author={author}
      category={category}
      completePercentage={completePercentage}
    />
  );
};

export default BooksFormContainer;
