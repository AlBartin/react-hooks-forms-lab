import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, submittedItem }) {
  
function handleSubmit(handleData) {
  submittedItem.preventDefault();
  const newItem = {
    id: uuid(),
    name: handleData.name,
    category: handleData.category,
  };
  onItemFormSubmit(newItem)
}

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name"  value={submittedItem} onChange={onItemFormSubmit} />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
