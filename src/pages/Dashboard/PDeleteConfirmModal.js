import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const PDeleteConfirmModal = ({ deleting, setDeleting, refetch }) => {
    const { name, quantity, _id } = deleting;

    const handleDelete = id => {
        axios.delete(`https://damp-tor-10320.herokuapp.com/tool/${id}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.data.deletedCount) {
                toast.success('Tool deleted successfully!')
                refetch();
                setDeleting(null);
            }
        });
    }
    return (
        <div>
            <input type="checkbox" id="product-delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-error text-lg">Are you sure you want to delete <span>{name}</span></h3>
                    <p className="py-4">Quantity <span className='text-error'>{quantity} unit</span></p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm">delete</button>
                        <label htmlFor="product-delete-confirm-modal" className="btn btn-sm">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PDeleteConfirmModal;