import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleting, setDeleting }) => {
    const { toolName, orderQuantity, orderValue, _id } = deleting;

    const handleDelete = id => {
        axios.delete(`https://damp-tor-10320.herokuapp.com/order/${id}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.data.deletedCount) {
                toast.success('Order cancelled successfully!')
                setDeleting(null);
            }
        });
    };
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-error text-lg">Are you sure you want to cancel order for <span>{toolName}</span></h3>
                    <p className="py-4">Quantity <span className='text-error'>{orderQuantity} unit</span> and order value is <span className='text-error'>${orderValue}</span></p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className="btn btn-error btn-xs">cancel order</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">back!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;