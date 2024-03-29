/*

We will do most of our activity in this file.

*/
import "./index.css";
import React, {useState} from 'react';

const itemTemplate = {
  name: '',
}

function createItem(name, price) {
  const new_item = { ...itemTemplate };
  new_item.name = name;
  return new_item
}

const ShoppingList = () => {

  const [items, setItems] = useState([]);

  function addItem() {
    const new_item = // ?


    setItems(prevItems => [...prevItems, new_item]);
  }

  return (
    <div>
      <h1>Shopping list</h1>

      <div
        id="items"
        style={{
          minHeight: "100px",
          maxWidth: "400px",
          border: "1px solid black",
        }}
      >
        {/* items.map... */}
      </div>

      <h2>Add a new item</h2>

      <div id="new-item-section">
        <div>
          <label>
            Item name
            <input type="text" />
          </label>
        </div>
        <button type="submit">Add item</button>
      </div>
    </div>
  );
};

export default ShoppingList;
