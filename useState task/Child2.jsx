import React from 'react'

const Child2 = (props) => {
  return (
    <div>
       <h1>Child2 Component</h1>

      <button onClick={props.updatemessage}>updated user</button>
      {props.message && (
        <>
          <h1>Name : {props.message.name}</h1>
          <h1>Email : {props.message.email}</h1>

        </>
      )}
    </div>
  )
}

export default Child2
