import React from 'react'
import Button from './Button';
import { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0)

    const sum = () => {
        setCount(count + 1)

    }
    const res = () => {
        setCount(count - 1)
    }

    console.log("se renderiza count")

    return (
        <div style={{backgroundColor: "red"}}>
            <Button fn={res} texto="-" />
            <span>{count}</span>
            <Button fn={sum} texto="+" />
            <div>Count</div>
        </div>
    )
}

export default Count