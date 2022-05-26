import React from 'react';
import notFound from '../assets/not-found.jpg';

const NotFound = () => {
    return (
        <div className='bg-white h-screen flex justify-center items-center'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;