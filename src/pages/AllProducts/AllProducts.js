import React from 'react';
import { useQuery } from 'react-query';

const AllProducts = () => {
    const {data:products=[],refetch,isLoading}=useQuery({
        queryKey:['products'],
        queryFn:async()=>{
          const res=await fetch('http://localhost:5000/product')
          const data=await res.json()
          return data
        }      
      })
      console.log(products);
    return (
        <div>
            <h1>All products</h1>
        </div>
    );
};

export default AllProducts;