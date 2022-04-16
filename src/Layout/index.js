import React, {createContext, useEffect, useState} from "react";
import Header from './../Components/Header/Header';
import Footer from './../Components/Shared/Footer/Footer';
import product from "../common/data/Products";


export const productsContext = createContext();

const LayOut = ({  children }) => {

  const [products, setProducts] = useState({ pds: product, cart: [] });
      
 
  
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
    
      setProducts({ ...products, cart: cart });
    }
  }, []);
  return (
    <>
     <productsContext.Provider value={{ products, setProducts }}>
      <Header  />
      
      {children}
  
      
    

      <Footer />
      </productsContext.Provider>
    </>
  );
};

export default LayOut;
