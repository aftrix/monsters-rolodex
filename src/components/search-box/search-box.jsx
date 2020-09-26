import React from 'react';

import './search-box.css';

export const SearchBox = ({ placeholder, onSearchChange }) => (
    <input
        className='search'
        type='search' 
        placeholder={placeholder} 
        onSearchChange={onSearchChange} />
)