import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading';
import ManageProductRow from './ManageProductRow';
import PDeleteConfirmModal from './PDeleteConfirmModal';

const ManageProducts = () => {
    const [deleting, setDeleting] = useState(null);

    const { data: tools, isLoading, refetch } = useQuery('users', () => fetch('https://damp-tor-10320.herokuapp.com/tool', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className='lg:m-10  rounded-lg'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tools Name</th>
                            <th>Available/unit</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <ManageProductRow key={tool._id} tool={tool} index={index} setDeleting={setDeleting} />)
                        }
                    </tbody>
                </table>
            </div>
            {deleting && <PDeleteConfirmModal deleting={deleting} setDeleting={setDeleting} refetch={refetch} />}
        </div>
    );
};

export default ManageProducts;