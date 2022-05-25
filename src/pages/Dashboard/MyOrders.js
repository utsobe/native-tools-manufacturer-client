import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading';
import OrderTableBody from './OrderTableBody';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    const navigate = useNavigate();
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true);
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setMyOrders(data);
                });
        }
    }, [user, myOrders, navigate]);

    // if (loading) {
    //     return <Loading />;
    // }
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
                            myOrders.map((order, index) => <OrderTableBody key={order._id} order={order} index={index} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;