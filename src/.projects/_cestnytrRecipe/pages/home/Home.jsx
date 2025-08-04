import {  useState } from "react";
import axios from "axios";
import "./Home.css";
import home from "../../assets/home.svg";
import Header from "../../Component/header/Header";
import Card from "../../Component/card/Card";
const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);
  const appId = process.env.REACT_APP_API_ID;
  const appKey = process.env.REACT_APP_API_KEY;
  const userId = process.env.REACT_APP_USER_ID;
  const mealTypes = ["breakfast", "lunch", "dinner", "snack", "teaTime"];

  const url = `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${query}&mealType=${selectedMeal}&app_id=${appId}&app_key=${appKey}`;
  const getData = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          "Edamam-Account-User": userId,
        },
      });
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <Header
        query={query}
        setQuery={setQuery}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        mealTypes={mealTypes}
        getData={getData}
      />
      {!recipes && <img className="homeImg" src={home} alt="home" />}
      {recipes?.length===0&& <h1>Sorry, Try Another Food Name</h1>}
      {recipes?.length>0&& <Card recipes={recipes}/>}
    </div>
  );
};

export default Home;
