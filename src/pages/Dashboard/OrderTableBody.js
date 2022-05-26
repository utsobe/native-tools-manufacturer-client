import React from 'react';
import { Link } from 'react-router-dom';

const OrderTableBody = ({ order, index, setDeleting }) => {
    const { toolImage, toolName, orderValue, orderQuantity, address, _id, paid, transactionId } = order;

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={toolImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div>{toolName}</div>
                        <div className="text-sm opacity-50">Address: {address}</div>
                    </div>
                </div>
            </td>
            <td>
                <p>{orderQuantity}</p>
            </td>
            <td>${orderValue}</td>
            <td>
                {!paid && <Link to={`/dashboard/payment/${_id}`} className="btn btn-success btn-xs">Pay</Link>}
                {paid && <span className="text-success">Paid</span>}
            </td>
            <td>
                {!paid && <label onClick={() => setDeleting(order)} htmlFor="delete-confirm-modal" className="btn btn-error btn-xs ms-10">Cancel</label>}
                {paid && <div>Transaction Id: <br /> <span className='text-success'>{transactionId}</span></div>}
            </td>
        </tr >
    );
};

export default OrderTableBody;