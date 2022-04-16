import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";

import { productsContext } from "../../../App";

import axios from "axios";
import { useHistory } from "react-router";
const ProductCard = () => {



  const history = useHistory();
  const { products, setProducts } = useContext(productsContext);

  const handleAddToCart = (pd) => {
    const newCart = { ...products, cart: [...products.cart, pd] };
    setProducts(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart.cart));
  };


  
    // const handleOrderNow = (id) => {
    //   history.push("/buyProcuct/" + id);
    //   console.log(id);
    // };
  return (
    <>
      {products.pds?.length === 0
        ? "NO Products Found"
        : products.pds.map((pd, index) => (
            <div key={pd.id} className="col-sm-6 col-md-3 col-lg-2 mt-4">
              <Card style={{}} className="card-Style">
                <Card.Img variant="top" src={pd.img} />
                <Card.Body style={{ background: "#f9f9f9" }}>
                  <Card.Title className="card-name">Leather Bag</Card.Title>
                  <Card.Text className="card-details">{pd.name}</Card.Text>

                  <div className="dfh">
                    <FontAwesomeIcon
                      className="p-1 custom-icon"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="p-1 custom-icon"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="p-1 custom-icon"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="p-1 custom-icon"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="p-1 custom-icon"
                      icon={faStar}
                    />
                  </div>

                  <div
                    className="
                  add-product-btn d-flex justify-content-between"
                  >
                    <span>$ {pd.price}</span>

                    <Button
                      variant="primary"
                      className="p-1"
                      onClick={() => handleAddToCart(pd)}
                    >
                      <FontAwesomeIcon className=" " icon={faShoppingCart} />{" "}
                      Add To Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
    </>
  );
};

export default ProductCard;
