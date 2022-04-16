import React from "react";
import "./ShopCategoriesCard.css";
const ShopCategorisCard = (props) => {
  const { name, time, image } = props.ShopCategories;
  return (
    <div className="">
      <div className="shop-Categoris">
        <span>{time}</span>
        <h3>{name}</h3>
        <img src={image} alt="" />
        <span></span>
      </div>
    </div>
  );
};

export default ShopCategorisCard;
