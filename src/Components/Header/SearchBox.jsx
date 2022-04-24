import React from 'react';
import './SearchBox.css';
const SearchBox = (props) => {

    const{show, setShow}=props.searcButton;
    console.log(show,"searchbox")
    
    return (
        <div  className={!show ? "shoSearchBox":"searchBoxMain"}>
            <div className='searchInp'>
                <input type="text" className='mainSearchbox' placeholder='name' />

            </div>
            
            
        </div>
    );
};

export default SearchBox;