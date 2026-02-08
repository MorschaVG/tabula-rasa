import './errorMessage.css'
import { useEffect } from "react";

function ErrorMessage() {
    useEffect(() => {
        console.log("het mounting effect van de error message is gemount!")
        return function unmount() {
            console.log("De error message component is weer weg uit de DOM!")
        }
    }, []);
    return (
        <h3 className="errorMessage">DAT ZIJN TEVEEL TEKENS!</h3>
    )
}

export default ErrorMessage;