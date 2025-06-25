import React, { useState } from 'react'

const Task4 = () => {
    const [islogin, setislogin] = useState(false)
     
     const updateuser = () =>{
        // if(!islogin){
        //     console.log("please login");
            
        // }
        // else {
        //     console.log("user login");
            
        // }

        setislogin((islogin) => !islogin )
     }
  return (
    <div>
       <button onClick={updateuser}>{islogin ? "login" : "logout"}</button>
        <h1>{islogin ? "please login " : "user login"}</h1>
    </div>
  )
}

export default Task4
