import React from 'react';

const AddCustomer = () => {
    return (
        <div className='md:mx-8 mx-3 my-4'>

            <div className=' max-w-[500px] mx-auto md:ml-8 border border-light rounded-2xl p-4'>
                <h2 className='text-3xl font-bold text-center py-3'>Add Customer</h2>
                <div className='mb-2 text-xl'>
                    <lebel>Name</lebel>
                </div>
                <div >
                    <input type="text" placeholder='Customer Name' className='input-bordered input w-full' />
                </div>
                <div className='mb-2 text-xl'>
                    <lebel>Phone Number</lebel>
                </div>
                <div className='mb-2'>
                    <input type="text" placeholder='Customer Phone Number' className='input-bordered input w-full' />
                </div>
                <div className='mb-2 text-xl'>
                    <lebel>Email</lebel>
                </div>
                <div className='mb-2'>
                    <input type="text" placeholder='Customer Email' className='input-bordered input w-full' />
                </div>
                <div className='mb-2 text-xl'>
                    <lebel>Password</lebel>
                </div>
                <div className='mb-2'>
                    <input type="password" className='input-bordered input w-full' />
                </div>
                <div className='flex justify-center mt-2 mb-2'>
                    <button className='btn border-none w-full bg-pink-600 hover:bg-pink-800'>Save Customer</button>
                </div>
            </div>
        </div>
    );
};

export default AddCustomer;