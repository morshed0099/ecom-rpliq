import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { userAuth } from '../../Authprovider/Authprovider';

const AddCutomer = () => {
    const [loader, setLoader] = useState(false)
    
    const { createUserWithEmailPss } = useContext(userAuth)
      const handelSingup = (e) => {
        setLoader(true)
        e.preventDefault()
        const form = e.target
        const userName = form.userName.value;
        const email = form.email.value;
        const phoneNumber = form.phone.value;
        const password = form.password.value;   

        const createUser = {
            userName,
            email,
            phoneNumber,
            password,
            userRoll: "customer"
        }
    }
    return (
        <div className='w-96 mx-auto border border-light rounded-2xl p-4 my-4'>
            <form >

                <div className='mb-2'>
                    <h2 className='text-3xl font-bold text-center'>Add Customer</h2>
                </div>
                <div className='mb-2'>
                    <lebel>Name</lebel>
                </div>
                <div className='mb-2'>
                    <input required name='userName' type="text" placeholder='enter your name' className='input input-bordered w-full' />
                </div>
                <div className='mb-2'>
                    <lebel>Email</lebel>
                </div>
                <div className='mb-2'>
                    <input required name="email" type="email" placeholder='enter your email' className='input input-bordered w-full' />
                </div>
                <div className='mb-2'>
                    <lebel>Phone Number</lebel>
                </div>

                <PhoneInput
                    country={'bd'}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true,
                        placeholder: '1991394353',

                    }}
                />
                <div className='mb-2'>
                    <lebel>Password</lebel>
                </div>
                <div className='mb-2'>
                    <input required name="password" type="password" className='input input-bordered w-full' />
                </div>
                
                <div className='mb-2'>
                    <button className='btn bg-pink-600 hover:bg-pink-800 border-none w-full'>
                        {
                            loader ? "please wait" : "Save Customer"
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCutomer;