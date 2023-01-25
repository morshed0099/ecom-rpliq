import React from 'react';

const AllCustomers = () => {
    return (
        <div className='mx-8 max-w-[1000px]'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                       
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCustomers;