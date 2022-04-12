import React, { useState } from 'react';
import './App.css';

function App() {

const [count,setCount]=useState(0);
  const increment=(data)=>{
    setCount (count+data);
  }
  const decrement=(data) =>{
    setCount (count-data);
  }

  return (
    <div className="App">
      <h2>Value of the counter is: {count}</h2>

      <button onClick={() => increment(1)}>increment 1</button>
      <button onClick={() => increment(5)}>increment 5</button>
      <button onClick={() => increment(10)}>increment 10</button>
      <button onClick={() => increment(100)}>increment 100</button>
      <br></br>
      <button onClick={( )=> decrement(1)}>decrement 1</button>
      <button onClick={() => decrement(5)}>decrement 5</button>
      <button onClick={() => decrement(10)}>decrement 10</button>
      <button onClick={() => decrement(100)}>decrement 100</button>

    </div>
  );
}

export default App;
