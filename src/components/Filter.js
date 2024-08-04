import React from "react";

function Filter({ searchText, onSearchChange, selectedCategory, onCategoryChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={onSearchChange}
        placeholder="Search..."
      />
      <select
        name="category"
        value={selectedCategory}
        onChange={onCategoryChange}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

