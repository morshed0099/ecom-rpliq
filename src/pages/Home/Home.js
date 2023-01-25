import React from 'react';
import Product from './Product';
import TopBannar from './TopBannar';


const Home = () => {
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