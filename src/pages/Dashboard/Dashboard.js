import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../shared/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <Loading />;
    }
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-base-100">
                {/* <!-- Page content here --> */}
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 border-r-2 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && <>
                        <li><Link to='/dashboard/my-order'>My Orders</Link></li>
                        <li><Link to='/dashboard/review'>Add Review</Link></li>
                    </>}
                    {admin && <>
                        <li><Link to='/dashboard/manage-order'>Manage All Orders</Link></li>
                        <li><Link to='/dashboard/add-product'>Add a Product</Link></li>
                        <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>
                        <li><Link to='/dashboard/manage-product'>Manage Products</Link></li>
                    </>}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;