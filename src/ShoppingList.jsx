/*

We will do all of our activity in this file.

*/
import "./index.css";
import React, { useState } from "react";
import ShoppingItem from "./components/ShoppingItem";

const itemTemplate = {
  name: "",
  price: -1,
  description: "",
};

function createItem(name, price) {
  const new_item = { ...itemTemplate };
  new_item.name = name;
  new_item.price = price;
  return new_item;
}

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  function addItem() {
    if (name === "") {
      alert("Please enter a name for the item");
      return;
    }
    if (price <= 0) {
      alert("Please enter a valid price for the item");
      return;
    }
    const new_item = createItem(name, price);

    setItems((prevItems) => [...prevItems, new_item]);
    setName("");
    setPrice(0);
  }

  function deleteItem(index) {
    setTimeout(() => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        newItems.splice(index, 1);
        return newItems;
      });
    }, 1000); 
  }

  return (
    <div>
      <h1>Shopping list</h1>

      <div
        id="items"
        style={{
          minHeight: "100px",
          maxWidth: "800px",
          border: "1px solid black",
          flex: "column",
        }}
      >
        {items.map((item, index) => (
          <ShoppingItem
            key={index}
            index={index}
            item={item}
            deleteItem={deleteItem}
          />
        ))}
      </div>

      <h2>Add a new item</h2>

      <div id="new-item-section">
        <div>
          <label>
            Item name
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label>
            Price
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </label>
        </div>
        <button type="submit" onClick={addItem}>
          Add item
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;
