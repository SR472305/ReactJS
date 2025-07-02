import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Post = () => {
    const [data, setdata] = useState([]);
    // const navigate = useNavigate();
    

    useEffect(() => {

        let api = "https://fakestoreapi.com/products";

        fetch(api).then((Response) => {
            return Response.json();
        }).then((data) => {
            setdata(data)
            console.log(data);

        })

    },[])


    return (
        <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row",  gap:"20px"}}>
            {data.map((value ) => {
                return (
                    <div key={value.id}>
                        <h1  style={{ border: "1px solid black", height: "270px", width: "300px", }}>{value.title}</h1>

                                    <Link to={`/Post/${value.id}`}>Show</Link>    
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Post
