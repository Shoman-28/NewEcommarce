import React from "react";
import './ShopCategories.css';
import laptop from "../../image/icons/2.png";
import handBag from "../../image/icons/3.png";
import backpack from "../../image/icons/4.png";
import duffle from "../../image/icons/5.png";
import trolley from "../../image/icons/6.png";
import ShopCategorisCard from "./ShopCategorisCard/ShopCategorisCard";

const ShopCategories = () => {
  const ShopCategories = [
    {
      name: "LAPTOP",
      image: laptop,
      time: "0MM - 31MM",
    },
    {
      name: "HAND bag",
      image: handBag,
      time: "0MM - 31MM",
    },
    {
      name: "Backpack",
      image: backpack,
      time: "0MM - 31MM",
    },
    {
      name: "Duffle",
      image: duffle,
      time: "0MM - 31MM",
    },
    {
      name: "Trolley",
      image: trolley,
      time: "0MM - 31MM",
    },
  ];
  return (
    <div className="container">
      <div className="">
        <div className="center mb-5 shop-catagories">
          <h3>Shop By Categories</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit voluptas.
          </p>
        </div>
        <div className="catagories-gird center">
          {ShopCategories.map((p) => (
            <ShopCategorisCard ShopCategories={p}> </ShopCategorisCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;
