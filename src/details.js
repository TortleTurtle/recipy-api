import React from 'react';
import "./App.css";

function Details({ingrediënts, instructions, vegan }) {

    return (
        <div className='inputField'>
            <h5>Ingredienten:</h5>
            <p>{ingrediënts}</p>
            <h5>Instructies:</h5>
            <p>{instructions}</p>
            <h5>Vegan: {vegan}</h5>
        </div>
    );
}

export default Details;