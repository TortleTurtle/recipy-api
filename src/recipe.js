import React, {useState} from 'react';
import "./App.css";
import Details from './details';

function Recipe({recipe, rerender}) {

    const [toggle, setToggle] = useState(false);
    
    const updateToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className="recipe">
            <h3>{recipe.title}</h3>
            <h5>Kitchen: {recipe.kitchen}</h5>
            <button onClick={updateToggle}>Details</button>
            { toggle ? <Details id={recipe.id} ingrediënts={recipe.ingredients} instructions={recipe.instructions} vegan={recipe.vegan} rerender={rerender}/> : null}
        </div>
    );
}

export default Recipe;