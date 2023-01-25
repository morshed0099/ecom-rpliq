import React from 'react';
import Button from '../../Components/Button';
import banar from '../../media/banar.png'
import model from '../../media/family (1).png'

const TopBannar = () => {
    return (
        <div className='w-full flex justify-center md:h-[100vh] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${banar})` }}>
            <div className='flex-row-reverse md:flex  items-center'>
                <div className=' w-full md:w-[50%] '>
                    <img className='w-full lg:h-[500px] ' src={model} alt="" />
                </div>
                <div className='p-4 font-bold text-center'>
                    <div className='mt-2 p-4 '>
                        <h4 className='text-3xl mb-3 text-black' >Huge Summer Collection</h4>
                        <p className='text-gray-600 mb-3'>Visit and Shope Here</p>
                        <p className='text-gray-600 mb-3'>Sirt,Sunglass,Tops,Shoes and more.......</p>
                        <div className='flex justify-center'>
                        <Button></Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopBannar;