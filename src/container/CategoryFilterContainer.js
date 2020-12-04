import React from 'react';
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

function CategoryFilterContainer({ handleFilterChange }) {
  return (
    <CategoryFilter handleFilterChange={handleFilterChange} categories={CATEGORIES} />
  );
}

export default CategoryFilterContainer;
