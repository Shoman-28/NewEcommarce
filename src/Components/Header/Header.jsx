import React, { useState } from "react";
import HeaderCard from "./HeaderCard/HeaderCard";
import Navications from "./Navications/Navications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from '../../image/logo.png'

const Header = () => {
  
  const [show, setShow] = useState(true);


  return (
    <div id="header" className="full-header no-sticky" data-menu-padding="30">
      <div id="header-wrap">
        <div className="contain">
          <div className="header-row align-items-center-stretch">
            <div id="logo">
              <a href="/" className="standard-logo">
                <img src={logo} alt="Ecommarce" />
              </a>
            </div>
            <div className="header-misc align-items-center-stretch">
              <HeaderCard />
              <div className="header-misc-icon">
                <span>
                
                    <FontAwesomeIcon icon={faUser} />
                  
                </span>
              </div>

              <div className="header-misc-icon" >
                <span   style={{cursor:"pointer"}}>
                  {
                     
                    show ? (
                                           
                      <FontAwesomeIcon icon={faSearch} onClick={()=>setShow(false)}/>                                     
                                      
                    ) : (<FontAwesomeIcon icon={faTimes} onClick={()=>setShow(true)}/>)
                      
								 
                    }
                    
                </span>
              
              </div>
            </div>

            <div id="primary-menu-trigger">
              <svg className="svg-trigger" viewBox="0 0 100 100">
                <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
                <path d="m 30,50 h 40"></path>
                <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
              </svg>
            </div>
            <Navications />
            <form
              class="top-search-form"
              action="http://themes.semicolonweb.com/html/canvas/search.html"
              method="get"
            >
              <input
                type="text"
                name="q"
                class="form-control"
                value=""
                placeholder="Type &amp; Hit Enter.."
                autocomplete="off"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="header-wrap-clone"></div>
    </div>
  );
};

export default Header;
