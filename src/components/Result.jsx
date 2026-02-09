import React from "react";
import {useContext} from "react";
import {ClickCountContext} from "../context/ClickCountContext.jsx";
import ClickButton from "./ClickButton.jsx";

function Result() {
const {data}= useContext(ClickCountContext);
    console.log(data.count);
    return (
        <>
            <h1>Het aantal kliks is {data.count}</h1>
            <ClickButton/>
        </>
    )
}

export default Result;

