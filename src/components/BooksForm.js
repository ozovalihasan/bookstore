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

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (title && category) {
            dispatch(addBook(title, category));
            setTitle('');
            setCategory('Action');
            e.target.reset();
          }
        }}
      >
        <input
          onChange={title => setTitle(title.target.value)}
          type="text"
          placeholder="Title"
          required
        />

        <select
          onChange={category => setCategory(category.target.value)}
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
