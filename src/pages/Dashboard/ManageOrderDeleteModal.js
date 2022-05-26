import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderDeleteModal = ({ deleting, setDeleting, refetch }) => {
    const { toolName, buyerEmail, _id, orderQuantity, orderValue } = deleting;

    const handleDelete = id => {
        axios.delete(`https://damp-tor-10320.herokuapp.com/all-order/${id}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.data.deletedCount) {
                toast.success('Order canceled successfully!')
                refetch();
                setDeleting(null);
            }
        });
    }
    return (
        <div>
            <div>
                <input type="checkbox" id="order-delete-confirm-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-error text-lg">Are you sure you want to cancel order of client: <span>{buyerEmail}</span></h3>
                        <div>
                            <p>Order Id: {_id}</p>
                            <p>Tools Name: {toolName}</p>
                            <p>Quantity: {orderQuantity} unit</p>
                            <p>Total Price: {orderValue}</p>
                        </div>
                        <div className="modal-action">
                            <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm">cancel</button>
                            <label htmlFor="order-delete-confirm-modal" className="btn btn-sm">back</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageOrderDeleteModal;