import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    const menuItems = <>
        <li><NavLink className='rounded-lg font-bold' to='/'>Home</NavLink></li>
        <li><NavLink className='rounded-lg font-bold' to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink className='rounded-lg font-bold' to='/review'>Review</NavLink></li>
        <li><NavLink className='rounded-lg font-bold' to='/about'>About</NavLink></li>
        <li><NavLink className='rounded-lg font-bold' to='/blog'>Blog</NavLink></li>
        <li><NavLink className='rounded-lg font-bold' to='/login'>Login</NavLink></li>
    </>
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className='bg-secondary shadow-xl sticky top-0 z-50'>
                        <div className="lg:max-w-7xl mx-auto navbar lg:px-12">
                            <div className="flex-1 px-2 mx-2 text-2xl font-bold">NATIVE TOOLS</div>
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal gap-x-2">
                                    {/* <!-- Navbar menu content here --> */}
                                    {menuItems}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        {menuItems}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;