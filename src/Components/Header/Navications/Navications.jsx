import React from "react";
import { Link } from "react-router-dom";


const Navications = (props) => {
  const { Style } = props.value;


  return (
    <nav id="sideNav" className={!Style && "showNavBar"}>

      <ul className="navber">
        <li className="">
          <Link as={Link} to="/home" className="">
            <div>Home</div>
          </Link>
        </li>
        {/* <li className=" mega-menu">
          <Link as={Link} to="/men" className="">

            <div>Men</div>
          </Link>
        </li>
        <li className=" mega-menu mega-menu-small">
          <Link as={Link} to="/women" className="">

            <div>Women</div>

          </Link>
        </li> */}
        <li className="">
          <Link as={Link} to="/porduct" className="">
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
