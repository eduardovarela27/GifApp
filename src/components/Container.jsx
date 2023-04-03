import React, { useState } from 'react';
import '../styles/Container.css';
import { SearchingBlock, GifsList } from './';


export const Container = () => {
    const categoriesByDefect = ['GOKU', 'MESSI', 'CR7', 'THE LAST OF US', 'SOCCER','BASKETBALL' ,'LINUX','WRESTLEMANIA','GOT','NARUTO'];
    const [categories, setCategories] = useState([categoriesByDefect[Math.floor(Math.random() * 10)]]);
    
    return (
        <div className='container'>
            <h1>Gif App</h1>
            <SearchingBlock categories={categories} categoryToAdd={setCategories} />
            {
                categories.map((cat) => (
                    <GifsList key={cat} category={cat} />
                ))
            }
        </div >
    )
}
