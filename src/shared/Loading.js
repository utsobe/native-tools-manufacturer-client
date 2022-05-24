import React from 'react';
import { RingLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center '>
            <RingLoader color={'#FEBD17'} size={100} />
        </div>
    );
};

export default Loading;