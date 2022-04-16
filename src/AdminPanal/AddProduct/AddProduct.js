import React, { useState } from 'react';

const AddProduct = () => {
    const [sidebarOpen, setSidebarOpen]=useState;
    const openSidebar =()=>{
        setSidebarOpen(true);
    }
    return (
        <div className='container'>
            <h1>React Deshbord</h1>
            <h1>shoanm</h1>
        </div>
    );
};

export default AddProduct;