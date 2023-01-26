import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { userAuth } from '../Authprovider/Authprovider';
import useCardView from '../hooks/useCardView';



const Header = () => {
    const { user, logOut } = useContext(userAuth)

    // add to cart hook use for showing cart length
    const [cart, refetch] = useCardView(user?.email)

    // logout user funtion 
    const handelLogout = (e) => {
        e.preventDefault()
        logOut()
            .then((result) => {
                refetch()
                toast.success('logout successfully')

            })
            .then((error) => {
                console.error(error);
                toast.error(error.message);
            })
    }
    const menuItems =
        <>
            <Link className='mr-3' to='/'>home</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/viewcart'>
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{cart.length}</span>
                    </div>
                </label>
            </Link>
            {
                user?.email ?
                    <>
                        <button onClick={handelLogout} className='btn border-none bg-pink-600 hover:bg-pink-800'>LogOut</button>
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
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Repliq Task</Link>
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