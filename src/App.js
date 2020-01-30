import React, {useEffect, useState} from 'react';
import Recipe from './recipe';
import './App.css';

function App() {
  //API Origin
  const origin = "http://185.114.157.188:8000";

  //states
  const [recipes, setRecipes] = useState([]);
  const [limit, setLimit] = useState(5);
  const [start, setStart] = useState(1);
  const [query, setQuery] = useState(`limit=5&start=1`);

  useEffect(() => {
    console.log("useEffect has run!");
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const res = await fetch(`${origin}/recipes?${query}`);
    const data = await res.json();
    setRecipes(data.items);
  };

  const updateLimit = e => {
    setLimit(e.target.value);
  };
  const updateStart = e => {
    setStart(e.target.value);
  }

  const updateQuery = e => {
    e.preventDefault();
    setQuery(`limit=${limit}&start=${start}`);
  }

  return (
    <div className="App">
      <div className="row">
        <form onSubmit={updateQuery}>
          <p>Items per page:</p>
          <input name="limit" type="number" onChange={updateLimit} value={limit}></input>
          <label for="start">Page:</label>
          <input name="start" type="number" onChange={updateStart} value={start}></input>
          <button name="submit" type="submit">Go!</button>
        </form>
      </div>
      <div className="row">
        {recipes.map(recipe => (
          <Recipe key={recipe.id} title={recipe.title} kitchen={recipe.kitchen} />
        ))}
      </div>
    </div>
  );
}

export default App;