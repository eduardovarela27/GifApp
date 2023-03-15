import React, {  useState } from 'react';
import '../styles/Container.css';
import { SearchingBlock } from './SearchingBlock';
import {GifsList} from '../components/GifsList';


export const Container = () => {
    const [category, setCategory] = useState('goku');

    return (
        <div className='container'>
            <h1>Gif App</h1>
            <SearchingBlock categoryToSearch = {setCategory}/>
            <GifsList category={category}/>
        </div >
    )
}
