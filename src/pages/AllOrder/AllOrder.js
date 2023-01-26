import React from 'react';
import { useQuery } from 'react-query';
import AllOrderTable from './AllOrderTable';

const AllOrder = () => {
    const {data:products=[],refetch,isLoading}=useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/addedProduct')
            const data=await res.json()
            return data
        }
       
    })
    console.log(products);
    return (
        <div className='mx-8 max-w-[1000px]'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Customer Email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            products.map(product => <AllOrderTable
                                key={product._id}
                                product={product}
                            ></AllOrderTable>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrder;