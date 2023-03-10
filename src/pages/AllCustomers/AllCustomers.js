import React from 'react';
import { useQuery } from 'react-query';

import AllcutomerTable from './AllcutomerTable';

const AllCustomers = () => {

    const {data:customers=[],refetch,isLoading}=useQuery({
        queryKey:['customers'],
        queryFn:async()=>{
            const res=await fetch('https://ecom-repliq-server-morshed0099.vercel.app/customer')
            const data=await res.json()
            return data
        }
    })
    console.log(customers);

    return (
        <div className='mx-8 max-w-[1000px]'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        
                    {
                        customers.map(customer=><AllcutomerTable                        
                            key={customer._id}
                            customer={customer}
                        ></AllcutomerTable>                        
                       )
                    }
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCustomers;