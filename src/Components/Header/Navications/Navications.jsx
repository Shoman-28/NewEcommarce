import React from "react";
import { Link } from "react-router-dom";

const Navications = () => {

  return (
    <nav className="primary-menu style-ecommerce menu-spacing-margin">
      <ul className="menu-container">
        <li className="menu-item current">
          <Link as={Link} to="/home" className="menu-link">
            <div>Home</div>
          </Link>
        </li>
        <li className="menu-item mega-menu">
          <a className="menu-link" href="/men">
            <div>Men</div>
          </a>
        </li>
        <li className="menu-item mega-menu mega-menu-small">
          <a className="menu-link" href="/women">
            <div>Women</div>
          </a>
        </li>
        <li className="menu-item">
          <Link as={Link} to="/accessories" className="menu-link">
            <div>Accessories</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link as={Link} to="/sale" className="menu-link">
            <div>Sale</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link as={Link} to="/blog" className="menu-link">
            <div>Blog</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link as={Link} to="/contact" className="menu-link">
            <div>Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navications;
