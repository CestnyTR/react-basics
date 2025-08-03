import List from "./List";
import Form from "./Form";
import { useState } from "react";
const Main = ({ items, handleAddItems, onDeleteItem, handleDoneItem }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = [...items].sort((a, b) => b.id - a.id);
  } else if (sortBy === "packed") {
    sortedItems = [...items].sort((a, b) => b.packed - a.packed);
  } else {
    sortedItems = items;
  }
  return (
    <>
      <Form handleAddItems={handleAddItems} />
      <ul className="mainWrapper">
        {sortedItems ? (
          sortedItems.map((item) => (
            <List
              item={item}
              onDeleteItem={onDeleteItem}
              handleDoneItem={handleDoneItem}
              key={item.id}
            />
          ))
        ) : (
          <h1>No Items Available</h1>
        )}
      </ul>
      <select
        className="select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="input">Sort By Input</option>
        <option value="packed">Sort By Packed</option>
      </select>
    </>
  );
};

export default Main;
