import React from 'react';
import { Link } from 'react-router-dom';

const OrderTableBody = ({ order, index, setDeleting }) => {
    const { toolImage, toolName, orderValue, orderQuantity, address, _id, paid } = order;

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={toolImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div>{toolName}</div>
                        <div class="text-sm opacity-50">Address: {address}</div>
                    </div>
                </div>
            </td>
            <td>
                <p>{orderQuantity}</p>
            </td>
            <td>${orderValue}</td>
            <td>
                {!paid && <Link to={`/dashboard/payment/${_id}`} class="btn btn-success btn-xs">Pay</Link>}
                {paid && <span class="text-success">paid</span>}
            </td>
            <td>
                <label onClick={() => setDeleting(order)} for="delete-confirm-modal" class="btn btn-error btn-xs ms-10">Cancel</label>
            </td>
        </tr>
    );
};

export default OrderTableBody;