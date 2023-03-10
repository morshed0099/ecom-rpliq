import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from '../../Authprovider/Authprovider';

const SiginUp = () => {
    const [loader, setLoader] = useState(false)
    const { createUserWithEmailPss } = useContext(userAuth)
    const navigate = useNavigate()
    const handelSingup = (e) => {
        setLoader(true)
        e.preventDefault()
        const form = e.target
        const userName = form.userName.value;
        const email = form.email.value;
        const phoneNumber = form.phone.value;
        const password = form.password.value;
        console.log(userName, email, phoneNumber, password)

        const createUser = {
            userName,
            email,
            phoneNumber,
            password,
            userRoll: "customer"
        }
        createUserWithEmailPss(email, password)
            .then((result) => {
                const user = result.user
                fetch('https://ecom-repliq-server-morshed0099.vercel.app/users', {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(createUser)
                }).then(res => res.json()).then(data => {

                    if (data.acknowledged) {
                        toast.success('user insert succefuly')
                        form.reset()
                        setLoader(false)
                        navigate('/login')

                    } else {
                        alert(data.message)

                    }
                }

                )
            }).catch((error) => {
                console.error(error)
                setLoader(false)
                toast.error(error.message)
            })

    }
    return (
        <div className='w-96 mx-auto border border-light rounded-2xl p-4 my-4'>
            <form onSubmit={handelSingup}>

                <div className='mb-2'>
                    <h2 className='text-3xl font-bold text-center'>SignUp Form</h2>
                </div>
                <div className='mb-2'>
                    <lebel>Name</lebel>
                </div>
                <div className='mb-2'>
                    <input name='userName' type="text" placeholder='enter your name' className='input input-bordered w-full' />
                </div>
                <div className='mb-2'>
                    <lebel>Email</lebel>
                </div>
                <div className='mb-2'>
                    <input name="email" type="email" placeholder='enter your email' className='input input-bordered w-full' />
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
                    <input name="password" type="password" className='input input-bordered w-full' />
                </div>
                <div>
                    <p>You have an Alredy Accaunt ? <Link to='/login'><span className='font-bold text-green-800'>Login</span></Link></p>
                </div>
                <div className='mb-2'>
                    <button className='btn bg-pink-600 hover:bg-pink-800 border-none w-full'>
                        {
                            loader ? "please wait" : "SignUp"
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SiginUp;