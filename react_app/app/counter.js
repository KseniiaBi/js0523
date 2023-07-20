'use client'
import { useState } from "react"

export default function Counter(){

    const [count, increment] = useState(0);

    function handleClick(){
        increment(count + 1);
    }

    return(
        <button onClick={handleClick}>Clicked {count} times</button>
    )
}