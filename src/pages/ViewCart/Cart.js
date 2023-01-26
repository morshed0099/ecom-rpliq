import React, { useState } from 'react';
import {  TrashIcon } from '@heroicons/react/24/solid'

const Cart = ({ crt }) => {
    const { _id, imageThird, productName, price } = crt

    const [prices, setPrice] = useState(price)
    const [totalPrice, setTotalPrice] = useState(price)
    const [quantity, setQuantity] = useState(1)

    console.log(crt, 'line 13')
    const handeldecriment = (e) => {
        setQuantity(quantity - 1)
        if (quantity > 0) {
            setPrice((quantity - 1) * price)

        }
    }
    const handelincriment = () => {
        setQuantity(quantity + 1)
        setPrice((quantity + 1) * price)
    }
    return (
        <div className='flex justify-between items-center gap-2 mb-4 border  border-light rounded-2xl p-3'>
            <div>
                <img className='md:w-24 md:h-24 w-10 h-10 rounded-2xl' src={imageThird} alt="" />
            </div>
            <div>
                <p>Product Name:</p>
                <p>Price: ${prices}</p>
            </div>
            <div className='flex-col justify-center'>
                <div>
                    <p className='ml-3 mb-3'>Quantity</p>
                </div>
                <div className='flex gap-3'>
                    <button onClick={handeldecriment} className='btn border-none bg-pink-400 btn-sm'>-</button>
                    <p>{quantity}</p>
                    <button onClick={handelincriment} className='btn border-none bg-pink-400 btn-sm'>+</button>
                </div>
            </div>
            <div>
                <div>
                    <button className='btn mr-[20px] mb-3 btn-success btn-sm'>PAY</button>
                </div>
                <div>
                    <button onClick={hadelCartDelete}><TrashIcon className="h-6 w-6 ml-4 text-red-500"/> </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;