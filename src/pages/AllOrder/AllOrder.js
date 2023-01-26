import React from 'react';
import { useQuery } from 'react-query';

const AllOrder = () => {
    const {data:products=[],refetch,isLoading}=useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/addedProduct')
            const data=await res.json()
            return data
        }
    })
    return (
        <div className='mx-8 max-w-[1000px]'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            // products.map(product => <AllproductTable
                            //     key={product._id}
                            //     product={product}
                            // ></AllproductTable>
                            // )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrder;