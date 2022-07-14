import axios from "axios";
import { useState, useEffect } from "react";
import HomeStyle from "./Home.style";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";

const Home = () => {
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState(mealTypes[0]);
  const { recipes, setRecipes } = useState("");

  const APP_ID = "ba701df0";
  const APP_KEY = "3273c964f38fee1e5af1e853b976e4df";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please Enter your meal");
    }
  };
  console.log(recipes);
  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealTypes={mealTypes}
        getData={getData}
      />
      <Cards recipes={recipes} />
    </div>
  );
};

export default Home;
