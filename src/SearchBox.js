import React from 'react';

const SearchBox = ({searchChange, searchfield}) => {
    return(
        <div className='pa2'>
            <input className='pa3 b b--gray bg-lightest-blue' type='search' placeholder='Search robots..' onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;
