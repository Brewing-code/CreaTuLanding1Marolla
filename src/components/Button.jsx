import React from "react";
import { useState } from "react";

const Button = ({fn, texto}) => {
    
    const [count, setCount] = useState(0)  

    const sum = ()=> {
        setCount(count +1)
    }

    return(
        <button onClick= {()=>sum()}> {count} </button>
    )
}

export default Button