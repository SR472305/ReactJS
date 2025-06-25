import React, { useState } from 'react'

const Task3 = () => {
   const [formdata ,setformdata] = useState({
    name :"",
    email : ""
   })

    const getinput = (event)=>{

        const { name ,value } =  event.target;

        setformdata((predata)=>({
            ...predata , [name] : value
        }))
        console.log(event.target.value);      
        
    }

    const submithandler = (event)=>{
        event.preventDefault();
        console.log(formdata);
        
    }
  return (
    <div>
       <label htmlFor="name">Name :</label><br />
       <input type="text" placeholder='Enter your name'onInput={getinput} name='name'  /><br /><br />
          
      <label htmlFor="email"> Email :</label><br />
      <input type="text" placeholder='Enter your name' onInput={getinput} name='email' /> <br /><br />

      <button onClick={submithandler}>Submit</button>
    </div>
  )
}

export default Task3
