import React, {useState} from "react";
import "./App.css";

function RecipeForm ({show, hideModal}) {

    const [title, setTitle] = useState("");
    const [kitchen, setKitchen] = useState("");
    const [ingrediënts, setIngrediënts] = useState("");
    const [instructions, setInstructions] = useState("");
    const [vegan, setVegan] = useState("");

    const [response, setResponse] = useState({});

    const updateTitle = e => {
        setTitle(e.target.value);
    }
    const updateKitchen = e => {
        setKitchen(e.target.value);
    }
    const updateIngrediënts = e => {
        setIngrediënts(e.target.value);
    }
    const updateInstructions = e => {
        setInstructions(e.target.value);
    }
    const updateVegan = e => {
        setVegan(e.target.value);
    }
    const sendData = async e => {
        e.preventDefault();
        const body = {
            title: title,
            kitchen: kitchen,
            ingredients: ingrediënts,
            instructions: instructions,
            vegan: vegan
        };
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");

        const res = await fetch(`http://185.114.157.188:8000/recipes`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: myHeaders,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
        });
        setResponse(await res.json());
        hideModal();
    }

    return(
        <div className={show}>
            <h3>Nieuw recept aanmaken</h3>
            <form onSubmit={sendData}>
                <label htmlFor="title">Titel:</label>
                <input name="title" type="text" onChange={updateTitle}></input>
                <label htmlFor="kitchen">Keuken:</label>
                <input name="kitchen" type="text" onChange={updateKitchen}></input>
                <label htmlFor="ingrediënts">Ingrediënten:</label>
                <input name="ingrediënts" type="text" onChange={updateIngrediënts}></input>
                <label htmlFor="instructions">Instructies:</label>
                <input name="instructions" type="text" onChange={updateInstructions}></input>
                <label htmlFor="vegan">Vegan?</label>
                <input name="vegan" type="text" onChange={updateVegan}></input>
                <input type="submit"></input>
            </form>
            <button onClick={hideModal}>Close</button>
        </div>
    );
}

export default RecipeForm;