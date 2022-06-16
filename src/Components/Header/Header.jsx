import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

import './Navications/Navication.css';
import './Header.css';

import HeaderCard from "./HeaderCard/HeaderCard";
import Navications from "./Navications/Navications";
import SearchBox from "./SearchBox";

import logo from '../../image/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {

  const [Style, setStyle] = useState(true);
  const [show, setShow] = useState(true);

  return (
    <div className="sticky-top header-bg">
     
          <div className="d-flex justify-content-between align-items-center">

            <div id="logo">
              <a href="/" className="standard-logo">
                <img src={logo} alt="Ecommarce" />
              </a>
            </div>

            <div className={!Style && "ShowNavBAr"}>
              <Navications value={{ Style, setStyle }} />
            </div>

            {/*======== SearchBox======== */}
            <SearchBox searcButton={{ show, setShow }} />

            <div className="d-flex align-items-center">

              <div className="header-misc-icon" >
                <span style={{ cursor: "pointer" }}>
                  {
                    show ? (

                      <FontAwesomeIcon icon={faSearch} onClick={() => setShow(false)} />

                    ) : (<FontAwesomeIcon icon={faTimes} onClick={() => setShow(true)} />)

                  }
                </span>
              </div>

              <div className="">
              <HeaderCard />
              </div>

              <div className="header-misc-icon">
              <Link as={Link} to="/userLogin" className="">
                
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </div>

              <div id="menuBtn" className="header-misc-icon">
                <FontAwesomeIcon
                  onClick={() => setStyle(!Style)}
                  icon={faAlignJustify}
                />
              </div>
            </div>
          </div>
       
      <div className="header-wrap-clone"></div>
    </div>
  );
};

export default Header;
