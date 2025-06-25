import React, { useState } from 'react'
import Child from './Child'
import Child2 from './Child2'

const ParentComponent = () => {
  const detial = {
    name: 'shyam',
    email: 'shyam@123'
  }
  const [message, setmessage] = useState(detial)

  const updatedvalue = () => {
    setmessage((predata) => ({
      ...predata, name: "Jay", email: "jay@123"
    }))
  }
  return (
    <>
      <Child message={message} />
      <Child2 message={message} updatemessage={updatedvalue} />
    </>
  )
}

export default ParentComponent
