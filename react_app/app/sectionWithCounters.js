'use client'
import { useState } from "react"

export default function CountersSection(){
    const [count, setCount] = useState(0);
    function handleCount(){
        setCount(count+1);
    }

    return(
        <section>
            <h2>Counters incrementing together</h2>
            <h3>{count}</h3>
            <DummyCounter click={handleCount} text={count} />
            <DummyCounter click={handleCount} text={count} />
        </section>
    )
}

function DummyCounter(props){
    return(
        <button onClick={props.click}>Count: {props.text}</button>
    )
}