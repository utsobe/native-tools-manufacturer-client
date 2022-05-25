import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        axios.put(`http://localhost:5000/user/admin/${email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            refetch();
            toast.success('Successfully made an admin');
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>make admin</button>}
                {role === 'admin' && <span>Admin</span>}
            </td>
        </tr>
    );
};

export default UserRow;