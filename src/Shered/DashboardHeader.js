import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { userAuth } from '../Authprovider/Authprovider';

const DashboardHeader = () => {
    const { user, setUser,logOut} = useContext(userAuth)

    const handelLogout = (e) => {
        e.preventDefault()
        logOut()
            .then((result) => {               
                toast.success('logout successfully')

            })
            .then((error) => {
                console.error(error);
                toast.error(error.message);
            })
    }
    const menuItems =
        <>
            <NavLink style={{marginTop:"10px",marginRight:"5px", fontWeight:"bold"}} className={`isactive ? "active":""`} to='/'>Home</NavLink>
           
            {
                user?.email ?
                    <>
                    <button onClick={handelLogout} className='btn btn-sm border-none mt-2 ml-3 bg-pink-600 hover:bg-pink-800'>LogOut</button>
                    </>
                    :
                    <>
                        <NavLink style={{marginTop:"10px",marginRight:"10px", fontWeight:"bold"}} className='mr-3' to='/login'>Login</NavLink >
                        <NavLink style={{marginTop:"10px",marginRight:"10px", fontWeight:"bold"}}  className='mr-3' to='/signup'>SignUp</NavLink >
                    </>
            }
        </>



    return (
        <div className=' w-full  bg-base-100'>
            <nav className='max-w-[1200px] mx-auto' >
                <div className="navbar">
                    <div className="navbar">

                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>

                    </div>

                    <div className='block lg:hidden'>


                        <label htmlFor="my-drawer-2" className="lg:hidden">
                            <svg htmlFor="my-drawer-2" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>



                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuItems}
                        </ul>
                    </div>


                </div>
            </nav>
        </div>
    );
};

export default DashboardHeader;