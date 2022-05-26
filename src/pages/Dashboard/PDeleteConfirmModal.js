import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const PDeleteConfirmModal = ({ deleting, setDeleting, refetch }) => {
    const { name, quantity, _id } = deleting;

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/tool/${id}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            console.log(res);
            if (res.data.deletedCount) {
                toast.success('Tool deleted successfully!')
                refetch();
                setDeleting(null);
            }
        });
    }
    return (
        <div>
            <input type="checkbox" id="product-delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-error text-lg">Are you sure you want to delete <span>{name}</span></h3>
                    <p class="py-4">Quantity <span className='text-error'>{quantity} unit</span></p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-error btn-sm">delete</button>
                        <label for="product-delete-confirm-modal" class="btn btn-sm">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PDeleteConfirmModal;