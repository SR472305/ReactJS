import React, { useState } from 'react'

const Task1 = () => {
    const [counter,setcounter] = useState(0);
  return (
    <div>
        <h1>Counter {counter}</h1>
        <button onClick={()=>{setcounter (counter + 1)}}>+</button>
        <button onClick={()=>{setcounter(counter -1)}}>-</button>
    </div>
  )
}

export default Task1
