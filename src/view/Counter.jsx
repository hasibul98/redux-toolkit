import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset} from '../features/counter/counterSlice';


function Counter() {
    const value = useSelector((state) => state.counter.value);
    // console.log(value);
    const dispatch = useDispatch();
  return (
    
       <div style={{textAlign: "center", marginTop: "50px"}}>
            <h1>Counter: {value}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
       </div>
    
  );
}

export default Counter;