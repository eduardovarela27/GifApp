import React, { useState } from 'react';
import '../styles/Container.css';

export const SearchingBlock = ({ categoryToAdd, categories }) => {
  const [inputvalue, setInputValue] = useState('');

  function handleOnKey(e) {
    if (e.key === "Enter") {
      if (categories.includes(inputvalue) || inputvalue.length <= 2) return
      categoryToAdd([inputvalue.toUpperCase(), ...categories]);
      setInputValue('');
    }
  }

  function handleOnChange({ target }) {
    setInputValue(target.value);
  }

  function handleOnclick(e) {
    e.key = "Enter";
    handleOnKey(e);
  }

  return (
    <div className="searching-block">
      <input
        className='input-search'
        type="text"
        onChange={handleOnChange}
        value={inputvalue}
        onKeyDown={handleOnKey}
        placeholder="Search"
      />
      <button className='btn-search' onClick={handleOnclick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
      <img src="" alt="" />
    </div>
  )
}
