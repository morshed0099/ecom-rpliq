import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardHeader from '../Shered/DashboardHeader';
import Header from '../Shered/Header';


const DashboardLayout = () => {
    return (
        <div>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex-col ">
                    <DashboardHeader></DashboardHeader>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <div className="dropdown dropdown-down">
                            <label tabIndex={0} className=" m-1">Customer Detalis</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/dashboard/addcustomer'>Add Customer</Link></li>
                                <li><Link to='/dashboard/allcustomers'>All Customers</Link></li>
                            </ul>
                        </div>

                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    )
}
export default DashboardLayout;