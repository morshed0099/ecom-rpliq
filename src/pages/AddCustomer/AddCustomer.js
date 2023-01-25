import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import { userAuth } from '../../Authprovider/Authprovider';

const AddCustomer = () => {
    const { createUserWithEmailPss } = useContext(userAuth)
    const hadelAddCustomer = (e) => {
        e.preventDefault()
        const form = e.target
        const userName = form.userName.value;
        const password = form.password.value;
        const phoneNumber = form.phoneNumber.value;
        const email = form.email.value;
        const customer={
            userName,
            password,
            phoneNumber,
            email
        }
        console.log(userName, password, phoneNumber, email);
        createUserWithEmailPss(email,password)
        .then((result)=>{
            const user=result.user
            fetch('http://localhost:5000/users',{
                method:"POST",
                header:{"content-type":"application/json"},
                body:JSON.stringify(customer)
            }).then(res=>res.json()).then(data=>{
                if(data.acknowledged){
                   toast.success('customer created successfully')
                    form.reset()
                }
            })
        }).catch((error)=>console.error(error))
    }

    return (
        <div className='md:mx-8 mx-3 my-4'>
            <div className=' max-w-[500px] mx-auto md:ml-8 border border-light rounded-2xl p-4'>
                <h2 className='text-3xl font-bold text-center py-3'>Add Customer</h2>
                <form onSubmit={hadelAddCustomer}>
                    <div className='mb-2 text-xl'>
                        <lebel>Name</lebel>
                    </div>
                    <div >
                        <input name='userName' type="text" placeholder='Customer Name' className='input-bordered input w-full' />
                    </div>
                    <div className='mb-2 text-xl'>
                        <lebel>Phone Number</lebel>
                    </div>
                    <PhoneInput
                        country={'bd'}
                        inputProps={{
                            name: 'phoneNumber',
                            required: true,
                            autoFocus: true,
                            placeholder: '1991394353',

                        }}
                    />
                    <div className='mb-2 text-xl'>
                        <lebel>Email</lebel>
                    </div>
                    <div className='mb-2'>
                        <input name='email' type="text" placeholder='Customer Email' className='input-bordered input w-full' />
                    </div>
                    <div className='mb-2 text-xl'>
                        <lebel>Password</lebel>
                    </div>
                    <div className='mb-2'>
                        <input name='password' type="password" className='input-bordered input w-full' />
                    </div>
                    <div className='flex justify-center mt-2 mb-2'>
                        <button className='btn border-none w-full bg-pink-600 hover:bg-pink-800'>Save Customer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCustomer;