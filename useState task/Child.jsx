import React from 'react'
import ParentComponent from './Task2'
import Child2 from './Child2'

const Child = (props) => {
  
    

return (
    <div>
        {/* <Child2  message = {props.detail}/> */}
        <h1>Child Component</h1>
        <h1>Name  :{props.message.name }</h1>
        <h1>Email  :{props.message.email }</h1>

    </div>
)
}

export default Child
