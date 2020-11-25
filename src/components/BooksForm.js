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
  const [category, setCategory] = useState('');

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(addBook(title, category));
        }}
      >
        <input
          onChange={title => setTitle(title.target.value)}
          type="text"
          placeholder="Title"
        />

        <select
          onChange={category => setCategory(category.target.value)}
          name="category"
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
