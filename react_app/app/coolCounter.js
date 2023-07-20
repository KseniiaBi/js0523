'use client'
import { useState } from "react"

export default function CoolCounter(){
    const [count, setCount] = useState(0);

    function handleChanges(num){
        if(count === 0 && num === -1){
            setCount(0);
        }
        else{
            setCount(count + num);
        }
    }

    return(
        <div>
            <button onClick={()=>handleChanges(-1)}>-</button>
            <span>{count}</span>
            <button onClick={()=>handleChanges(1)}>+</button>
        </div>
    )
}