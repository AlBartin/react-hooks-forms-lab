import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearchedItem] = useState("");
  const [submittedItem, setSubmittedItem] = useState("");

  // useEffect(() => {
  //   setSelectedCategory(searchedItem)
  // }, [searchedItem])

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchedItem(enteredData) {
    setSearchedItem(enteredData.target.value);
    setSelectedCategory(enteredData.target.value);
  }

  function handleSubmitItem(submission) {
    setSubmittedItem(submission);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category.includes(selectedCategory);

  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmitItem} submittedItem={submittedItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchedItem} searchedItem={searchedItem} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
