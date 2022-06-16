import React from 'react';
import './SearchBox.css';
const SearchBox = (props) => {

    const{show}=props.searcButton;
 
    
    return (
        <div  className={!show ? "shoSearchBox":"searchBoxMain"}>
            <div className='searchInp'>
                <input type="text" className='mainSearchbox' placeholder='name' />

            </div>
            
            
        </div>
    );
};

export default SearchBox;