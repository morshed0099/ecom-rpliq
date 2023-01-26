import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardHeader from '../Shered/DashboardHeader';



const DashboardLayout = () => {
    return (
        <div>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex-col  ">
                    <DashboardHeader></DashboardHeader>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[200px] bg-gray-300 text-base-content">
                        <p className="btn text-center btn-ghost normal-case text-xl">Repliq Task</p>
                        <li><Link className='mb-2' to='/dashboard/addcustomer'>Add Customer</Link></li>
                        <li><Link className='mb-2' to='/dashboard/allcustomers'>All Customers</Link></li>
                        <li><Link className='mb-2' to='/dashboard/addproduct'>Add Product</Link></li>
                        <li><Link className='mb-2' to='/dashboard/allproducts'>All Product</Link></li>
                        <li><Link className='mb-2' to='/dashboard/allorder'>All Order</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    )
}
export default DashboardLayout;