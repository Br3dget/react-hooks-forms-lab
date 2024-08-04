import React, { useState } from "react";
import Filter from "./Filter"; 
import ItemForm from "./ItemForm";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState([
    { id: uuid(), name: "Apple", category: "Produce" },
    { id: uuid(), name: "Milk", category: "Dairy" },
    { id: uuid(), name: "Cake", category: "Dessert" },
  ]);
  
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };
  
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  

  return (
    <div>
      <Filter
        searchText={searchText}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name} - {item.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

