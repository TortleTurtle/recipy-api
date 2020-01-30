import React, {useState} from 'react';
import "./App.css";
import Details from './details';

function Recipe({title, kitchen, ingredients, instructions, vegetarian, vegan}) {

    const [toggle, setToggle] = useState(false);
    
    const updateToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className="recipe">
            <h3>{title}</h3>
            <h5>Kitchen: {kitchen}</h5>
            <button onClick={updateToggle}>Details</button>
            { toggle ? <Details ingrediënts={ingredients} instructions={instructions} vegan={vegan} /> : null}
        </div>
    );
}

export default Recipe;