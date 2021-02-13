import { useState } from "react";
import React  from 'react';
import { AddCategory } from "./componets/AddCategory.jsx";
import { GitGrif } from "./componets/GitGrif.jsx";

const GitExpertApp = () => {
    
    // const categories = ['goku','vegeta','krillin'];

    const  [categories, setcategories] = useState( ['One Punch']);
    
    // const handleAdd = ()=>{
    //     //  setcategories([...categories, 'Numero 18']);
    //      setcategories(cats=>[...cats,'Numero 18']);
          
    // }
    
    return(
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
            <hr/>
            {/* <button onClick={handleAdd} >Agregar</button> */}

            <ol>
                {
                
                categories.map(category => <GitGrif key= {category} category={category}/> ) 
                
                }
            </ol>
        </>
    );
}

export default GitExpertApp;