import React from 'react';
import { useQuery } from 'react-query';

const useCardView = (email) => {   
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await fetch(`https://ecom-repliq-server-morshed0099.vercel.app/viewcart/${email}`)
            const data = await res.json()
            return data;
        }
    })    
    return[cart,refetch]
};

export default useCardView;