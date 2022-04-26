import React from 'react';
import Contents from './Contents/Contents';
import Gallery from './Gallery/Gallery';
import Slider from './Slider/Slider';
import BestSellProduct from '../BestSellProduct/BestSellProduct';
import FeaturedItems from '../Shared/FeaturedItems/FeaturedItems';
import ManAndWomen from './Man&Women/ManAndWomen';
import ShopCategories from '../ShopCategories/ShopCategories';
import ShoppingCard from './ShoppingCard/ShoppingCard';


import { useContext } from 'react';
import { productsContext } from './../../Layout/index';
import LoginFrom from './../LoginFrom/LoginFrom';

const Home = () => {
    const  {products}  = useContext(productsContext);

    console.log(products,"porducts")
    
    return (
        < >
            <Slider/>            
            <Contents/>
            <Gallery/>
            <BestSellProduct/>
            <FeaturedItems/>
            <ManAndWomen/>
            <ShopCategories/>
            <ShoppingCard/>
           
        </>
    );
};

export default Home;