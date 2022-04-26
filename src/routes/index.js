
import Main from '../pages/Main/index'
// import AllProduct from './../Components/Product/AllProduct';
import AllProduct from '../Components/BestSellProduct/BestSellProduct';

// import ShoppingCard from '../Components/Home/ShoppingCard/ShoppingCard';
import AddToCard from '../Components/AddToCard/AddToCard';

import Contact from './../Components/ContactPage/Contact';
import Blog from './../Components/Blog/Blog';
import BlogDetails from './../Components/Blog/BlogDetails';
import LoginFrom from '../Components/LoginFrom/index';
import CreateAcount from './../Components/LoginFrom/CreatAcount/Index';

const publicRoutes=[
    { path: "/", exact: true, component: Main },
    { path: "/home", component: Main },
    { path: "/men", component: AllProduct },
    { path: "/women", component: AllProduct },
    // { path: "/footwear", component: AllProduct },
    // { path: "/clothing", component: AllProduct },
    
    { path: "/accessories", component: AllProduct },
    { path: "/sale", component: AllProduct },
    { path: "/blog", component: Blog },
    {path:"/blogDetails", component: BlogDetails},
    { path: "/contact", component: Contact },
    
    { path: "/viewCart", component: AddToCard },
    { path: "/userLogin", component: LoginFrom },
    { path: "/createAcount", component: CreateAcount },

]

const authProtectedRoutes=[
    { path: "/", exact: true, component: Main },
]

export {authProtectedRoutes, publicRoutes}