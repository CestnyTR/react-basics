const List = ({ item, onDeleteItem, handleDoneItem }) => {
  const { id, name, quantity, packed } = item;

  return (
    <li className="listWrapper">
      <span>Quantity: {quantity}</span>
      <p style={packed ? { textDecoration: "line-through" } : {}}> {name}</p>
      <div className="buttonWrapper">
        <button className="doneBtn" onClick={() => handleDoneItem(id)}>
          Done
        </button>
        <button className="deleteBtn" onClick={() => onDeleteItem(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
export default List;
