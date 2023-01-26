import { useEffect, useState } from "react";



const useAdmin = (email) => {
    console.log(email,'line6')
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoader, setIsAdminLoader] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/admin/user/${email}`)
                .then(res=>res.json())
                .then(data=>{
                    setIsAdmin(data.isAdmin)
                    setIsAdminLoader(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoader]
};

export default useAdmin;