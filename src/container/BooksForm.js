import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooksAdd } from '../redux/index';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
const BooksForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');
  const [completePercentage, setCompletePercentage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title && author && category && completePercentage) {
      dispatch(fetchBooksAdd(title, author, category, completePercentage));
      // setTitle('');
      // setAuthor('');
      // setCategory('Action');
      // setCompletePercentage(0);
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
    <div className="books-form main">
      <div className="books-form add-text ">ADD NEW BOOK</div>
      <form onSubmit={handleSubmit} className="books-form form-main ">
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
          required
        />

        <select
          className="books-form select-category "
          onChange={handleChange}
          name="category"
          required
        >
          <option disabled value>
            Select a category
          </option>
          {CATEGORIES.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          name="completePercentage"
          onChange={handleChange}
          type="text"
          placeholder="Book complete percentage"
          required
        />
        <button type="submit" className="books-form add-book ">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BooksForm;
