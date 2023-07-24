import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, incrementByAmount, selectCount } from './counterSlice';

export default function Counter(){
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return(
        <div className="counter">
            <button onClick={()=>dispatch(decrement())}>-</button>
            <input type="number" onChange={()=>dispatch(incrementByAmount())} value={count} />
            <button onClick={()=>dispatch(increment())}>+</button>
        </div>
    )
}