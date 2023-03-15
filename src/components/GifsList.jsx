import React, { useEffect } from 'react'
import { FetchGifs } from '../Api/FetchGifs'

export const GifsList = ({category}) => {
  console.log(category);
  useEffect(() => {
    FetchGifs(category);
  });
  
  return (
    <div>GifsList</div>
  )
}
