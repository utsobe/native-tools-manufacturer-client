import React from 'react';

const OrderTableBody = ({ order, index }) => {
    const { toolImage, toolName, orderValue, orderQuantity, address } = order;
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
                <button class="btn btn-success btn-xs">Pay</button>
            </td>
            <td>
                <button class="btn btn-error btn-xs ms-10">cancel</button>
            </td>
        </tr>
    );
};

export default OrderTableBody;