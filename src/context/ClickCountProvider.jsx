import {useState} from "react";
import {ClickCountContext} from "./ClickCountContext.jsx";

function ClickCountProvider({ children }) {
    const [data, setData] = useState({count: 0});
    return (
        <ClickCountContext.Provider value={{ data, setData }}>
            {children}
        </ClickCountContext.Provider>
    )
}

export default ClickCountProvider