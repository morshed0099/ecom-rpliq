import React from 'react';
import { useQuery } from 'react-query';

const useCardView = (email) => {   
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/viewcart/${email}`)
            const data = await res.json()
            return data;
        }
    })    
    return[cart,refetch]
};

export default useCardView;