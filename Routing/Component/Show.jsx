import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Createpost, { Createposts } from './Createpost'

const Show = () => {

  const {data} = useContext(Createpost)

  console.log(data);
  
  return (
    <div>
      <h1>{data.title}</h1>
      <h4>{data.description}</h4>
      <img src={data.image} alt="image error" style={{height:'200px', width:"200px"}}/>
      <h4>{data.category}</h4>
      <h4>{data.price}</h4>
    </div>
  )
}

export default Show
