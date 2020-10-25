import React from 'react';
import "./App.css";

function Details({ id, ingrediënts, instructions, vegan, rerender}) {

    const deleteRecipe = async () => {
        const myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');

        const res = await fetch(`http://185.114.157.188:8000/recipes/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: myHeaders,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: {}
        });
        rerender();
    }

    return (
        <div className='inputField'>
            <h5>Ingredienten:</h5>
            <p>{ingrediënts}</p>
            <h5>Instructies:</h5>
            <p>{instructions}</p>
            <h5>Vegan: {vegan}</h5>
            <button>Edit</button>
            <button onClick={deleteRecipe}>Delete</button>
        </div>
    );
}

export default Details;