import { useEffect, useState } from "react"
import React  from 'react'
import { GitGridItem } from "./GitGridItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GitGrif = ({category}) => {
    // const [count, setcount] = useState(0);
    // const [images, setImages] = useState([]);
    const {data:images,loading} = useFetchGifs(category);
    // useEffect(()=>{//evita que el useState este haciendo la peticion hhtp cada vez que actualiza el estado
    //     getGifs(category)
    //     .then(setImages)
    // },[category]);
    
    
    
    // getGifs();
    
    return (
        
        <>
            <h3>{category}</h3>
            {loading && <p>cargando</p>}
            <div className="card_conteiner">
                {/* <h3>{count}</h3>
                <button onClick={()=>setcount(count+1)}>dale</button> */}
                {images.map(img=>
                    <GitGridItem key={img.id} {...img}/>
                )}  
            </div>
        </>
                      
        
    )
}
