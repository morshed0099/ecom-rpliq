import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2'
import { userAuth } from '../../Authprovider/Authprovider';

const Login = () => {
    const{user,setUser,loginUserWithEmail}=useContext(userAuth)
     console.log(user ,'line7');
    const hadelLogin=(e)=>{
       e.preventDefault()
       const form =e.target
       const email=form.email.value;
       const password=form.password.value;    

       loginUserWithEmail(email,password)
       .then((result)=>{
        const user=result.user
        setUser(user)
        toast.success('login successfuly')
        console.log(user);
       }).catch((error)=>{
        console.error(error)
        toast.error(error.message)
       })
    
     
       
    }
    return (
        <div className='w-96 mx-auto my-6 border p-4 border-light rounded-2xl'>
            <form onSubmit={hadelLogin}>
                <div className='text-3xl font-bold text-center p-4'><h1>Login Form</h1></div>
                <div className='mb-2'>
                    <lebel>Email</lebel>
                </div>
                <div className='mb-2'>
                    <input name='email' type="email"  className='input input-bordered w-full'/>
                </div>
                <div className='mb-2'>
                    <lebel>password</lebel>
                </div>
                <div className='mb-2'>
                    <input name='password' type="password" className='input input-bordered w-full' />
                </div>
                <div>
                    <button className='btn bg-pink-600 hover:bg-pink-800 border-none w-full'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;