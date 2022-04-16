import axios from "axios";
import React, { useContext, useState } from "react";

import { baseUrl, productsContext } from "../../App";


import ProductCard from "./ProductCard/ProductCard";


const Product = () => {
  // const [productsCart, setProductsCart] = useState({
  //   data: [],
  //   err: "",
  //   loading: false,
  // });

  // console.log(products?.length / "shoman"," length")

  // const handleAddToCart = (product) => {
  // const newCart = [...products, product];
  //   setProductsCart({newCart,loading:true })

  //   setProducts(productsCart)

  // const newCart =(productsCart, product)
  // setProducts({...products,loading:true })
  // const newCart = [...cart, product];
  // setCart(newCart);
  //   fetch("https://arcane-refuge-91321.herokuapp.com/addServices", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(servicesInfo),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data) {
  //         setProducts({...products, data:data, error:"", loading:true })
  //         setResponse(data);
  //       }
  //     })
  //     .catch((err) => {
  //        setProducts({...products, err:err.message})
  //       console.log(err);
  //     });
  // };
  //};

  // axios

  //  axios.get(`${baseUrl}/product/insert`)
  //  .then(res=>{

  //    console.log(res.data)
  //  })
  //  .catch(err=>{

  //    console.log(err.message)
  //  })

  //  let data={

  //    name:"saimoin"
  //  }

  //  axios.post(`${baseUrl}/userAddToCard`, data)
  //  .then(data=>{

  //  })
  //  .catch(err=>{}

  //  }


  return (
    <div>
      <div className="row mt-5 ">
        <ProductCard />

      

        {/* <button disabled={products.loading}>
           {products?.loading ?"Sending...": "Send"}
           {products?.loading && "Icon hbe "}
             </button> */}
      </div>
    </div>
  );
};

export default Product;
