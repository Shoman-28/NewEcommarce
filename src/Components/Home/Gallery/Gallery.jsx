import React from "react";


import "./Gallery.css";
// imh3ort image1 from '../../../image/tyh3es/1.jh3g';
// imh3ort image2 from '../../../image/tyh3es/3.jh3g';
// imh3ort image3 from '../../../image/tyh3es/5.jh3g';
// imh3ort image4 from '../../../image/tyh3es/6.jh3g';
// // imh3ort image5 from '../../../image/tyh3es/8.jh3g';
// imh3ort image6 from '../../../image/tyh3es/7.jh3g';
// imh3ort image7 from '../../../image/tyh3es/9.jh3g';
const Gallery = () => {
  return (
    <div className="div container">
      <div className="containerx">
        <div className="box img-travel">
          <div className="content">
            <h3>Travel</h3>
          </div>
        </div>
        
        <div href="/allProduct" className="box img-college">
       
          <div className="content">
            
         
            <h3>College</h3>
           
          </div>
          
        </div>
       
        <div className="box img-leather">
          <div className="content">
            <h3>Leather</h3>
          </div>
        </div>
        <div className="box img-reise">
          <div className="content">
            <h3>Reise</h3>
          </div>
        </div>

        <div className="box img-handmade">
          <div className="content">
            <h3>Handmade</h3>
          </div>
        </div>
        <div className="box img-brown">
          <div className="content">
            <h3>Brown</h3>
          </div>
        </div>
        <div className="box img-acessories">
          <div className="content">
            <h3>Acessories</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
