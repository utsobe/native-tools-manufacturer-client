import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content bg-white">
                {/* <!-- Page content here --> */}
                <Outlet />

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 border-r-2 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>Add Review</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;