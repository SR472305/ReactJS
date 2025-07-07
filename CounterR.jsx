// import React from 'react'
// import { DECREMNET, INCREMENET, RESET } from './Component/redus/actiontype';
// import { decrement, increment, rest } from './Component/redus/action';
// import { useDispatch, useSelector } from 'react-redux';

// const CounterR = () => {
//     const counter = useSelector(state => state.count);
//     const dispatch = useDispatch();
//     console.log(counter);

//     return (
//         <div>
//             <h1>{counter}</h1>
//             <button onClick={() => dispatch(increment())}>Add</button>
//             <button onClick={() => dispatch(decrement())}>Sub</button>
//             <button onClick={() => dispatch(rest())}>rest</button>
//         </div>
//     )
// }

// export default CounterR


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, rest } from './Component/redus/action';

const CounterR = () => {
    const counter = useSelector(state => state.count);
    const dispatch = useDispatch();
  return (
    <>
     <h1>{counter}</h1> 
     <button onClick={() => dispatch(increment())}>
        INC
     </button>
     <button onClick={() => dispatch(decrement())}>
        DEC
     </button>
      <button onClick={() => dispatch(rest())}>
        reset
     </button>
    </>
  )
}

export default CounterR
