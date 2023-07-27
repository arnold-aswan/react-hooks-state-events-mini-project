import React, { useState } from "react";

function CategoryFilter({ categories, tasks, setTasks, onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = (category) => {
    setSelectedCategory(category);
    onFilter(category);
  };

  const categoryButton = categories.map((category) => {
    // console.log(category);
    return (
      <button
        key={category}
        className={selectedCategory === category ? "selected" : ""}
        onClick={() => handleClick(category)}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
