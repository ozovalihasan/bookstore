import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../actions/index';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];
function BooksForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleSubmit = e => {
    e.preventDefault();
    if (title && category) {
      dispatch(addBook(title, category));
      setTitle('');
      setCategory('Action');
      e.target.reset();
    }
  };

  const handleChange = e => {
    if (e.target.name === 'title') setTitle(e.target.value);
    if (e.target.name === 'category') setCategory(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Title"
          required
        />

        <select
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
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}

export default BooksForm;
