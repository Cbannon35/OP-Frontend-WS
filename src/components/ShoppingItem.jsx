import "../index.css";
import React, { useEffect, useState } from "react";
import Description from "./Description";

function ShoppingItem(props) {
  const [clicked, setClicked] = useState(false);

  const { item, index, deleteItem } = props;

  return (
    <div
      style={{
        display: "flex",
        flex: "row",
        padding: "10px",
        margin: "10px",
      }}
      onClick={(e) => setClicked(!clicked)}
      className={clicked ? "highlight" : ""}
    >
      <div style={{ padding: "10px" }}>{item.name}</div>
      <strong style={{ padding: "10px" }}>{item.price}</strong>
      <Description name={item.name} />
      <button onClick={() => {setClicked(true); deleteItem()}}>X</button>
    </div>
  );
}

export default ShoppingItem;
