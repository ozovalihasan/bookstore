import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/index';
import CategoryFilterContainer from '../container/CategoryFilterContainer';

function BookStoreHeader() {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className="bookHeader main">
      <div className="bookHeader content">
        <h1>BookStore CMS</h1>
        <h3>BOOKS</h3>
        <h3>CATEGORIES</h3>
        <CategoryFilterContainer handleFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}

export default BookStoreHeader;
