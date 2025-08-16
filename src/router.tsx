import { createBrowserRouter } from "react-router-dom";

import Frontend from "./layout/Frontend";
import Backend from "./layout/Backend";

import Home from "./frontend_pages/Home";
import About from "./frontend_pages/About";
import Contact from "./frontend_pages/Contact";
import Products from "./frontend_pages/Products";

import Login from "./backend_pages/Login";
import Dashboard from "./backend_pages/Dashboard";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Frontend></Frontend>,
        children:[{
            index:true,
            element:<Home></Home>
        },{
            path:'about',
            element:<About></About>
        },{
            path:'products',
            element:<Products></Products>
        },{
            path:'contact',
            element:<Contact></Contact>
        }]
    },{
        path:'/admin',
        element:<Backend></Backend>,
        children:[{
            index:true,
            element:<Dashboard></Dashboard>
        },{
            path:'login',
            element:<Login></Login>
        }]
    }
])