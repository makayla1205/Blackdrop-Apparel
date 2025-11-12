'use client'
import React, { useState } from 'react'

export default function Searchbar() {
  const [inputValue, setInputValue] = useState<string>('');
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className='searchcontainer'>
        <form className='searchform' action="/search" method='get'>
            <input 
            type="text"
            value={inputValue}
            onChange={handleChange}
            name="q" 
            className='searchbar border border-slate-600' 
            placeholder='Search Products'/>
        </form>
    </div>
  )
}
