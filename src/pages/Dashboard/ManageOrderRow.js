import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ order, index, refetch, setDeleting }) => {
    const { _id, buyerEmail, orderValue, orderQuantity, paid, status } = order;

    const handleStatus = () => {
        axios.patch(`https://damp-tor-10320.herokuapp.com/all-order/${_id}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.data.modifiedCount) {
                refetch();
                toast.success('Order shipped');
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{buyerEmail}</td>
            <td>{orderQuantity}</td>
            <td>{orderValue}</td>
            <td>
                {!paid && <span className='text-error'>Unpaid</span>}
                {(paid && !status) && <button onClick={handleStatus} className='btn btn-xs'>pending</button>}
                {status && <span className='text-success'>Shipped</span>}
            </td>
            <td>
                {!paid && <label onClick={() => setDeleting(order)} for="order-delete-confirm-modal" class="btn btn-error btn-xs ms-10">cancel</label>}
            </td>
        </tr>
    );
};

export default ManageOrderRow;