import React from 'react';

const ManageProductRow = ({ tool, index, setDeleting }) => {
    const { image, name, quantity } = tool;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div>{name}</div>
                    </div>
                </div>
            </td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeleting(tool)} htmlFor="product-delete-confirm-modal" className="btn btn-error btn-xs ms-10">Delete</label>
            </td>
        </tr >
    );
};

export default ManageProductRow;