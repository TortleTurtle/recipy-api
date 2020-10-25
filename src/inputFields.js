import React, {useState} from 'react';
import "./App.css";

function InputFields({ title, kitchen, ingrediënts, instructions, vegan }) {

    const [dataTitle, setTitle] = useState("");
    const [dataKitchen, setKitchen] = useState("");
    const [dataIngrediënts, setIngrediënts] = useState("");
    const [dataInstructions, setInstructions] = useState("");
    const [dataVegan, setVegan] = useState("");
    const [data, setData] = useState({});
    const [res, setRes] = useState({});
    
    //functions
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

    const submitData = e => {
        e.preventDefault();
        setData({
            title: dataTitle,
            kitchen: dataKitchen,
            ingrediënts: dataIngrediënts,
            instructions: dataInstructions,
            vegan: dataVegan
        });

        async () => {
            console.log("posting to api");
            const res = await fetch(`${origin}/recipes`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
        }

    }

    return (
        <div className='inputField'>
            <form onSubmit={submitData}>
                <label htmlFor="title">Titel:</label>
                <input onChange={updateTitle} name="title" type="text"></input>
                <label htmlFor="kitchen">Keuken:</label>
                <input onChange={updateKitchen} name="kitchen" type="text"></input>
                <label htmlFor="ingrediënts">Ingrediënten:</label>
                <input onChange={updateIngrediënts} name="ingrediënts" type="text"></input>
                <label htmlFor="instructions">Instructies:</label>
                <input onChange={updateInstructions} name="instructions" type="text"></input>
                <label htmlFor="vegan">Vegan:</label>
                <input onChange={updateVegan} name="vegan" type="text"></input>
                <input type="submit"></input>
            </form>
        </div>
    );
}

export default InputFields;