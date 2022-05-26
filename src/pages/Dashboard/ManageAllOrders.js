import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading';
import ManageOrderDeleteModal from './ManageOrderDeleteModal';
import ManageOrderRow from './ManageOrderRow';

const ManageAllOrders = () => {
    const [deleting, setDeleting] = useState(null);

    const { data: orders, isLoading, refetch } = useQuery('users', () => fetch('https://damp-tor-10320.herokuapp.com/all-order', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='lg:m-10  rounded-lg'>
            <div class="overflow-x-auto w-full">
                <table class="table w-full ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Clients</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageOrderRow key={order._id} order={order} index={index} setDeleting={setDeleting} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
            {deleting && <ManageOrderDeleteModal deleting={deleting} setDeleting={setDeleting} refetch={refetch} />}
        </div>
    );
};

export default ManageAllOrders;