'use client';
import Image from "next/image";
import coffeeImage from './coffee.jpeg'
import {data} from './data.js'
import {useState} from 'react'

export default function CoffeeShop(){
    const [cart, add] = useState([]);

    function addToCart(id)  {
        data.forEach(coffee => {
            if(coffee.id === id){
                add([...cart,coffee.name]);
            }
        })
    }
    return(
        <>
            {
                <ol>{
                cart.map((item,index) => <li key={index}>{item}</li>)

                }</ol>
            }
            <div className="shop">
            {
                data.map((coffee, index) => 
                <Coffee key={index}
                        name={coffee.name}
                        price={coffee.price}
                        id={coffee.id}
                        click={addToCart} />)
            }
            </div>
        </>
    )
    
}

function Coffee(props){
    return(
        <div className="coffee">
            <Image src={coffeeImage}
             width={240} height={426} alt={props.name} />
            <h3>{props.name}</h3>
            <div className="price">{props.price}</div>
            <button onClick={()=>props.click(props.id)}>Add to cart</button>
        </div>
    )
}
 