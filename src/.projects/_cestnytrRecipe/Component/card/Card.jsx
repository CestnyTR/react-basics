import "./Card.css";
import defaultImage from "../../assets/default-image.jpg"
import { useNavigate } from "react-router-dom";
const Card = ({ recipes }) => {
  const navigate=useNavigate();
  return (
    <div className="card">
      {recipes.map(({ recipe }, index) => {
        const {label,image}=recipe
        return (
          <div className="cardWrapper" key={index}>
            <h1>{label}</h1>
            <img src={image ? image :defaultImage} alt="food" />
            <button onClick={()=>navigate("detail",{state:recipe,replace:false})}>More Detail</button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
