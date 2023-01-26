import React, { useContext, useState } from 'react';
import { userAuth } from '../../Authprovider/Authprovider';
import useCardView from '../../hooks/useCardView';
import Cart from './Cart';


const ViewCart = () => {
    const { user } = useContext(userAuth)
    const [cart, refetch] = useCardView(user?.email)
    console.log(cart)
    refetch()
    return (
        <div className=' p-4 max-w-[1000px] mx-auto'>
            {
               cart.map((crt, index) => <Cart
                    key={crt._id}
                    crt={crt}
                ></Cart>)

            }
        </div>
    );
};

export default ViewCart;