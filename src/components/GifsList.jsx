import React, { useEffect, useState } from 'react'
import { FetchGifs } from '../Api/FetchGifs'
import { GifItem } from './GifItem';

export const GifsList = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    FetchGifs(category).then(data => setGifs(data));
  }, []);

  return (
    <>
      <h2>{category}</h2>
      <div className="card-grid">
        {gifs.map(gif => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  )
}
