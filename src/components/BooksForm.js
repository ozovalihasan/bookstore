import React from 'react';

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
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" />

        <select name="category">
          <option disabled selected value>
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
