import React, {useEffect, useState} from 'react';
import Recipe from './recipe';
import './App.css';

function App() {
  //API Origin
  const origin = "http://185.114.157.188:8000";

  //states
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("useEffect has run!");
    indexRecipies();
  }, []);

  const indexRecipies = async () => {
    const res = await fetch(`${origin}/recipes?limit=6&start=0`);
    const data = await res.json();
    setRecipes(data.items);
  } 

  return (
    <div className="App">
      {recipes.map(recipe => (
        <Recipe key={recipe.id} title={recipe.title} kitchen={recipe.kitchen} />
      ))}
    </div>
  );
}

export default App;