import React,{useState} from "react";
import { Link } from "react-router-dom";


const Navications = (props) => {
  const {Style, setStyle}=props.value;

  
  return (
    <nav id="sideNav" className={!Style && "showNavBar"}>
      
      <ul className="navber">
        <li className="">
          <Link as={Link} to="/home" className="">
            <div>Home</div>
          </Link>
        </li>
        <li className=" mega-menu">
          <a className="" href="/men">
            <div>Men</div>
          </a>
        </li>
        <li className=" mega-menu mega-menu-small">
          <a className="" href="/women">
            <div>Women</div>
          </a>
        </li>
        <li className="">
          <Link as={Link} to="/accessories" className="">
            <div>Accessories</div>
          </Link>
        </li>
        <li className="">
          <Link as={Link} to="/sale" className="">
            <div>Sale</div>
          </Link>
        </li>
        <li className="">
          <Link as={Link} to="/blog" className="">
            <div>Blog</div>
          </Link>
        </li>
        <li className="">
          <Link as={Link} to="/contact" className="">
            <div>Contact</div>
          </Link>
        </li>
      </ul>
      
      
    </nav>
  );
};

export default Navications;
