import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { productsContext } from './../../../Layout/index';



const HeaderCard = () => {

   const  {products}  = useContext(productsContext);


  const [show, setShow] = useState(false);

  const cardProductsClose = () => {
    if (show === true) {
      setShow(false);
    }
    
  };

  return (
    <div className="header-misc-icon">
      <a href="#" onClick={() => setShow(true)}>
        <span className="top-cart-number">{products?.cart?.length}</span>
        <FontAwesomeIcon icon={faShoppingBag} />
      </a>

      <Modal show={show}>
        <Modal.Header closeButton onClick={() => cardProductsClose(false)}>
          <Modal.Title className="top-cart-title">
            <h4>Shopping Cart</h4>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="top-cart-items">
            {products?.cart?.map((pd, index) => (
              <div className="top-cart-item">
                <div className="top-cart-item-image">
                  <a href="">
                    <img src={pd.img} alt="Blue Round-Neck Tshirt" />
                  </a>
                </div>
                <div className="top-cart-item-desc">
                  <div className="top-cart-item-desc-title">
                    <a href="">{pd.name}</a>
                    <span className="top-cart-item-price d-block">
                      {pd.price}
                    </span>
                  </div>
                  <div className="top-cart-item-quantity">{pd.quantity}</div>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer className="row justify-content-between">
          <div className="col-4 ">
            <span
              style={{ fontSize: "1.25rem", color: "black", fontWeight: "600" }}
            >
              $114.95
            </span>
          </div>
          <div className="col-4">
            <Link to="/viewCart" className="button button-3d button-small m-0">
              View Cart
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HeaderCard;
