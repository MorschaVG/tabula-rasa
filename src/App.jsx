import './App.css'
import ErrorMessage from './components/errorMessage.jsx'
import {useEffect, useState} from "react";

function App() {
    const [text, setText] = useState('')

    useEffect(() => {

    }, [text]); // A value in the dependency array makes this an 'update effect'!

    return (
        <>
            <h1>De grote testpagina!</h1>
            <input type="text"
                   name="test"
                   onChange={(e) => setText(e.target.value)}
                   placeholder="Gaat uw gang"
                   value={text}/>
            {text.length > 3 && <ErrorMessage/>}

        </>
    )
}

export default App
