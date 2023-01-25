import React, { useState } from 'react';

const ProductsAdd = () => {
    const [file, setFile] = useState();
    const [file1, setFile1] = useState();
    const [file2, setFile2] = useState();
    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));

    }
    const handleChange1 = (e) => {
        console.log(e.target.files);
        setFile1(URL.createObjectURL(e.target.files[0]));

    }
    const handleChange2 = (e) => {
        console.log(e.target.files);
        setFile2(URL.createObjectURL(e.target.files[0]));

    }
    return (
        <div className='md:mx-8 mx-4 border border-light rounded-2xl p-4'>
            <h2 className='text-3xl font-bold text-center py-4'>Add Product</h2>
           <form>
            <div className='mb-2'>
                <lebel>Product Name</lebel>
            </div>
            <div className='mb-2'>
                <input type="text" name='ProductName' placeholder='Product Name' className='input input-bordered w-full' />
            </div>
            <div className='mb-2'>
                <lebel>Product Images</lebel>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <div className='mb-2 flex-col  lg:flex lg:gap-3 '>
                        <input name='images1' onChange={handleChange} type="file" placeholder='Product Name' className=' w-full file-input-bordered' />
                        <img alt='' className='w-[100px] h-[100px]' src={file} />
                    </div>
                </div>
                <div>
                    <div className='mb-2 flex-col  lg:flex lg:gap-3 '>
                        <input name='images2' onChange={handleChange1} type="file" placeholder='Product Name' className=' w-full' />
                        <img alt='' className='w-[100px] h-[100px]' src={file1} />
                    </div>
                </div>
                <div>
                    <div className='mb-2 flex-col  lg:flex lg:gap-3 '>
                        <input name='images3' onChange={handleChange2} type="file" placeholder='Product Name' className=' w-full' />
                        <img alt='' className='w-[100px] h-[100px]' src={file2} />
                    </div>
                </div>
            </div>
            <div className='mb-2'>
                <label>Price</label>
            </div>
            <div className='mb-2'>
                <input name='price' type="number" className='input input-bordered w-full' />
            </div>
            <div className='mb-2'>
                <label>Old Price</label>
            </div>
            <div className='mb-2'>
                <input name='oldPrice' type="number" className='input input-bordered w-full' />
            </div>
            <div className='mb-2'>
                <lebel>Description</lebel>
            </div>
            <div className='mb-2'>
                <textarea name='description' className='w-full textarea textarea-bordered'  rows="4"></textarea>
            </div>
            <div>
                <button className='btn bg-pink-600 hover:bg-pink-800 border-none w-full'>Save</button>
            </div>
            </form>
        </div>
    );
};

export default ProductsAdd;