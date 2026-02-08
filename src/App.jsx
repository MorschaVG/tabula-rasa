import {useEffect, useState} from 'react'
import './App.css'

function App() {
    console.log("De 'App' functie is aangeroepen!");
    const [counter, setCounter] = useState('')
    const [value, setValue] = useState('')

    useEffect(() => {
        console.log("Het mounting effect is gemount!");
        const id = setInterval(() => {
            setCounter(
                new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false,
                })
            )
        }, 1000)
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        if (value) {
        console.log("Er is iets geüpdatet!");}
        if (value.length > 3) {
            console.log("De waarde is nu meer dan 3 tekens");
        }
    }, [value]);

    // noinspection JSVoidFunctionReturnValueUsed
    return (

        <>
            {console.log("de HTML uit de return statement is gerenderd!")}
            <h1>Sicke klok!</h1>
            <h3>Tijd: {counter}</h3>
            <input type="text"
                   name="name-field"
                   id="name-field"
                   placeholder="je naam hier"
                   onChange={(e) => setValue(e.target.value)}
                   value={value}
            />
        </>
    )
}

export default App
