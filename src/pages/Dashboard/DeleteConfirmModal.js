import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleting, setDeleting }) => {
    const { toolName, orderQuantity, orderValue, _id } = deleting;

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/order/${id}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            console.log(res);
            if (res.data.deletedCount) {
                toast.success('Order cancelled successfully!')
                setDeleting(null);
            }
        });
    };
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-error text-lg">Are you sure you want to cancel order for <span>{toolName}</span></h3>
                    <p class="py-4">Quantity <span className='text-error'>{orderQuantity} unit</span> and order value is <span className='text-error'>${orderValue}</span></p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-error btn-xs">cancel order</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">back!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;