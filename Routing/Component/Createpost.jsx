import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Createposts = createContext()
const Createpost = ({children}) => {
    const {id} = useParams();
    const [data,setdata] = useState(null);

    useEffect(()=>{
        let api = `https://fakestoreapi.com/products/${id}`;

        fetch(api).then((resp)=>{
            return resp.json();
        }).then((data)=>{
            setdata(data)
            console.log(data);
            
        })
    },[id])
  return (
    <div>
            <Createposts.Provider value={{data}}>
                {children}
            </Createposts.Provider>
    </div>
  )
}

export default Createpost
