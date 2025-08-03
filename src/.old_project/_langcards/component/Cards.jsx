import { useState } from "react";

const Cards = ({ langObj }) => {
  const { id, img, name, options } = langObj;
  const [ show, setShow]  = useState(true);

  return (
    <div className="cardsWrapper" onClick={() => setShow(!show)}>
      {show ? (
        <div className="cardHeader" name={id}>
          <img src={img} alt={name} />
          <h1>{name}</h1>
        </div>
      ) : (
        <ul className="optionsList">
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Cards;
