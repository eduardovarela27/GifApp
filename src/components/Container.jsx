import React, { useState } from 'react';
import '../styles/Container.css';
import { SearchingBlock } from './SearchingBlock';
import { GifsList } from '../components/GifsList';


export const Container = () => {
    const [categories, setCategories] = useState(['GOKU']);

    return (
        <div className='container'>
            <h1>Gif App</h1>
            <SearchingBlock categories ={categories} categoryToAdd={setCategories} />
            {
                categories.map((cat) => (
                    <GifsList key={cat} category={cat} />
                ))
            }
        </div >
    )
}
