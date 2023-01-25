import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userAuth } from '../Authprovider/Authprovider';


const Header = () => {
    const { user, setUser } = useContext(userAuth)
    const menuItems =
        <>
            <Link className='mr-3' to='/'>home</Link>
            <Link to='/dashboard'>Dashboard</Link>
            {
                user?.email ?
                    <>
                    <button className='btn border-none bg-pink-600 hover:bg-pink-800'>LogOut</button>
                    </>
                    :
                    <>
                        <Link className='mr-3' to='/login'>Login</Link>
                        <Link className='mr-3' to='/signup'>SignUp</Link>
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
                        <a className="btn btn-ghost normal-case text-xl">Repliq Task</a>
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

export default Header;