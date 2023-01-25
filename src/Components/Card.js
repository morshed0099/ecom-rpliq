import React from 'react';
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'

import shirt from '../media/shirt.png'
import Button from './Button';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div className='p-4 m-3 border border-light rounded-2xl shadow-2xl'>
            <div className='flex justify-between items-center mb-2'>
               
                    <Button className='btn-sm'></Button>
                    <span> <HeartIcon className="h-6 w-6 text-gray-400 hover:text-yellow-500" /></span>
               
            </div>
            <div className='overflow-hidden p-3 mb-2'>
                <img className=' w-full h-[300px] hover:scale-125 duration-1000 ease-out ' src={shirt} alt="" />
            </div>
            <div className='flex justify-between '>
                <div>
                    <p className='text-3xl font-xl text-pink-800 '>$450</p>
                    <p className='text-3xl font-xl line-through'>$550</p>
                </div>
                <div>
                <div className='flex'>
                    <span> <StarIcon className="h-6 w-6  text-yellow-500" /></span>
                    <span> <StarIcon className="h-6 w-6  text-yellow-500" /></span>
                    <span> <StarIcon className="h-6 w-6  text-yellow-500" /></span>
                    <span> <StarIcon className="h-6 w-6  text-yellow-500" /></span>                    
                </div>
                <div>
                    <Link to='/productdetails'><button className='btn mt-3 btn-sm bg-transparent border border-yellow-600 text-black hover:text-yellow-700'>Details</button></Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Card;