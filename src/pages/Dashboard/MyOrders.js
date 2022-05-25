import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderTableBody from './OrderTableBody';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [myorders, setMyOrders] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/order?email=${user.email}`).then(res => {
            setMyOrders(res.data);
        })
    }, [user.email])
    return (
        <div className='lg:m-10  rounded-lg'>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tools Name</th>
                            <th>Quantity</th>
                            <th>Order Value</th>
                            <th>payment</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map((order, index) => <OrderTableBody key={order._id} order={order} index={index} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;