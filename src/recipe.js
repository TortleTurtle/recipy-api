import React, {useState} from 'react';
import "./App.css";

function Recipe({title, kitchen, vegitarian}) {
    
    const [isGreen, setGreen] = useState(false);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const changeColour = () => {
        setGreen(!isGreen);
    }

    return (
        <div className={isGreen ? "recipe green" : "recipe"}>
            <h3>{title}</h3>
            <h5>Kitchen: {kitchen}</h5>
            <button onClick={increment}>Like: {count}</button>
            <button onClick={changeColour}>GREEN</button>
        </div>
    );
}

export default Recipe;