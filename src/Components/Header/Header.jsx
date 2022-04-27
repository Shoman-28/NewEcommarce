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

const Header = () => {

  const [Style, setStyle] = useState(true);
  const [show, setShow] = useState(true);

  return (
    <div className="sticky-top" data-menu-padding="30">
      <div id="header-wrap">
        <div className="contain">
          <div className="header-row align-items-center-stretch">

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

            <div className="header-misc align-items-center-stretch">

              <div className="header-misc-icon" >
                <span style={{ cursor: "pointer" }}>
                  {
                    show ? (

                      <FontAwesomeIcon icon={faSearch} onClick={() => setShow(false)} />

                    ) : (<FontAwesomeIcon icon={faTimes} onClick={() => setShow(true)} />)

                  }
                </span>
              </div>

              <HeaderCard />

              <div className="header-misc-icon">
                <a href="/userLogin">
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </div>

              <div id="menuBtn" className="header-misc-icon">
                <FontAwesomeIcon
                  onClick={() => setStyle(!Style)}
                  icon={faAlignJustify}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-wrap-clone"></div>
    </div>
  );
};

export default Header;
