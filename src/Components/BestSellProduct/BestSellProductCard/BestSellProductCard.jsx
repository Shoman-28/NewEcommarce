
import React from "react";

import ProductCard from "../ProductCard/ProductCard";

const BestSellProductCard = () => {
  return (
    <div className="container">
      <h3 className="pt-5 text-center">Best Sell Product</h3>
      <div className="row mt-5 ">
        <ProductCard />
      </div>
    </div>
  );
};

export default BestSellProductCard;
