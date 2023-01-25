import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddCustomer from "../pages/AddCustomer/AddCustomer";
import AllCustomers from "../pages/AllCustomers/AllCustomers";
import AllProducts from "../pages/AllProducts/AllProducts";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ProductsAdd from "../pages/ProductsAdd/ProductsAdd";
import SiginUp from "../pages/SiginUp/SiginUp";
import ViewCart from "../pages/ViewCart/ViewCart";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SiginUp></SiginUp>
            },
            {
                path:'/viewcart',
                element:<ViewCart></ViewCart>
            },
            {
                path:'/productdetails',
                element:<ProductDetails></ProductDetails>
            }
        ]
      },
      {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>,
            
              },
              {
                path:'/dashboard/addcustomer',
                element:<AddCustomer></AddCustomer>
              },
              {
                path:'/dashboard/allcustomers',
                element:<AllCustomers></AllCustomers>
              },
              {
                path:'/dashboard/addproduct',
                element:<ProductsAdd></ProductsAdd>
              },
              {
                path:'/dashboard/allproducts',
                element:<AllProducts></AllProducts>
              }
        ]
      },
      
      

])