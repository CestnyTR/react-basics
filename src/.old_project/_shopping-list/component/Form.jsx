import { useState } from "react";

const Form = ({handleAddItems ,onDeleteItem , handleDoneItem}) => {
  const  [product, setProduct ]= useState("");
  const  [quentity, setQuentity]  = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product ) {
      alert("Please fill in product field");
      return;
    }
    const newToDo = {
      id: Date.now(),
      name: product,
      quantity: quentity,
      packed: false,
    };
    setProduct("");
    setQuentity(1);
    handleAddItems(newToDo);
    
};

  return (
    <form onSubmit={handleSubmit} onDeleteItem ={onDeleteItem } handleDoneItem={handleDoneItem} className="form">
      <select
        className="select"
        name="quantity"
        id="quantity"
        onChange={(e) => setQuentity(Number(e.target.value))}
      >
        {[...Array(20)].map((_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        id="name"
        name="name"
        className="input"
        placeholder="Enter a name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <button className="addBtn">
        Submit
      </button>
    </form>
  );
};
export default Form;
