import React from 'react';

function Filter({ onFilter }) {
  const handleChange = (event) => {
    onFilter(event.target.name, event.target.value);
  };

  return (
    <div className="filter">
      <select name="category" onChange={handleChange}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="books">Books</option>
        // Add more categories as needed
      </select>
      <select name="price" onChange={handleChange}>
        <option value="">All Prices</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        // Add more price ranges as needed
      </select>
    </div>
  );
}

export default Filter;
