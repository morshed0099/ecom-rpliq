import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { userAuth } from '../Authprovider/Authprovider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loader}=useContext(userAuth) 
    const [isAdmin,isAdminLoader]=useAdmin(user?.email)
    
    if( loader||isAdminLoader ){
        return <h1>loading</h1>
    }

    if(user && isAdmin){
        return children;
    }
    return (<>
        {
         toast.success('to access admin route login admin email ')        
        }
        
     </>)

};

export default AdminRoute;