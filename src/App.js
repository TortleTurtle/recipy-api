import React, {useEffect, useState} from 'react';
import Recipe from './recipe';
import InputFields from './inputFields'
import RecipeForm from './recipeForm';
import './App.css';

function App() {
  //API Origin
  const origin = "http://185.114.157.188:8000";

  //states
  const [recipes, setRecipes] = useState([]);
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(5);
  const [start, setStart] = useState(1);
  const [query, setQuery] = useState(`limit=5&start=1`);

  useEffect(() => {
    console.log("useEffect has run!");
    getRecipies();
  }, [query, modal, recipes]);


  const getRecipies = async () => {
    const res = await fetch(`${origin}/recipes?${query}`);
    const data = await res.json();
    setRecipes(data.items);
  };

  const showModal = () => {
    setModal(true);
  }
  const hideModal = () => {
    console.log('closing modal');
    setModal(false);
  }

  //pagination
  const updateLimit = e => {
    setLimit(e.target.value);
  };
  const updateStart = e => {
    setStart(e.target.value);
  };
  const updateQuery = e => {
    e.preventDefault();
    setQuery(`limit=${limit}&start=${start}`);
  };
  const nextPage = () => {
    setStart(start + 1);
    setQuery(`limit=${limit}&start=${start}`);
  };
  const prevPage = () => {
    setStart(start - 1);
    setQuery(`limit=${limit}&start=${start}`);
  };

  return (
    <div className="App">
      { modal ? <RecipeForm show={ modal ? "recipeForm show" : "recipeForm hide"} hideModal={hideModal} /> : null }
      <div className="row">
        <button onClick={prevPage}>previous</button>
        <form onSubmit={updateQuery} className='navigation'>
          <label htmlFor="limit">Items per page:</label>
          <input name="limit" type="number" onChange={updateLimit} value={limit}></input>
          <label htmlFor="start">Page:</label>
          <input name="start" type="number" onChange={updateStart} value={start}></input>
          <button name="submit" type="submit">Go!</button>
        </form>
        <button onClick={nextPage}>next</button>
      </div>
      <div className="row">
        {recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} rerender={getRecipies} />
        ))}
      </div>
      <div className="row">
        <InputFields />
        <button onClick={showModal}>Voeg een recept toe!</button>
      </div>
    </div>
  );
}

export default App;