import React from 'react'

export const GitGridItem = ({id,title,url}) => {
    // const {id,title,url} = img;
    console.log({id,title,url});

    
    return (
        <div className="card">

            <img src={url} alt={title}/>
            <p>{title}</p>
        
        </div>
    )
}
