import React from 'react';
import './search-panel.css'

const SearchPanel = ({updateSearch}) =>{

    return(
        <input
            type="text"
            className='from-control search-input'
            placeholder='Search by seconds '
            onChange={(event) => updateSearch(event.target.value)}

        />
    )
}

export default SearchPanel