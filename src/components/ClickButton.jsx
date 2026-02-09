import {createContext, useContext} from 'react'
import {ClickCountContext} from "../context/ClickCountContext.jsx";

function ClickButton() {
const {data, setData} = useContext(ClickCountContext);

    const handleClick = () => {
        setData(prev => ({...prev, count: prev.count + 1}))
    };

    return (
        <button type="button" onClick={handleClick}>
            KLIK
        </button>
    )
}

export default ClickButton
