import { Navigate, useLocation } from "react-router-dom";
const { useContext, Children } = require("react");
const { userAuth } = require("../Authprovider/Authprovider");



const PrivateRoute = ({children}) => {
    const {user,setUser,loader}=useContext(userAuth)
    const location=useLocation()
       if(loader){
        return <h1>loadging....</h1>
       }
       if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
       }
       return children;

   
};

export default PrivateRoute;