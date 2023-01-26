import React, { useContext } from 'react';
import { userAuth } from '../../Authprovider/Authprovider';
import useCardView from '../../hooks/useCardView';
import Product from './Product';
import TopBannar from './TopBannar';


const Home = () => {
    const {user}=useContext(userAuth)
    const[cart,refetch]=useCardView(user?.email)
    refetch()
    return (
        <div>
            <section className='max-w-[1200px] mx-auto'>
            <TopBannar></TopBannar>
            </section>
            <section className='max-w-[1100px] mx-auto '>
                <h2 className='text-3xl md:mt-12  font-bold text-yellow-600 ml-7'>All Product</h2>
                <Product></Product>
                
            </section>
        </div>
    );
};

export default Home;