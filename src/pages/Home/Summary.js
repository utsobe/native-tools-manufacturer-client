import React from 'react';
import { AnnotationIcon, BeakerIcon, CashIcon, CogIcon, CubeIcon, UserCircleIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/solid'
import QuoteReq from './QuoteReq';

const Summary = () => {
    return (
        <>
            <div className='bg-secondary mt-24'>
                <h2 className='pt-12 text-center font-bold text-4xl'>MILLIONS BUSINESS TRUST US</h2>
                <p className='text-center font-bold pb-16'>TRY TO UNDERSTAND OUR USERS EXPECTATION</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-32 lg:max-w-7xl mx-auto lg:px-12'>
                    <div className='text-center text-primary'>
                        <UserGroupIcon className='mx-auto h-24' />
                        <h2 className='text-5xl font-bold py-1'>100+</h2>
                        <p className='text-xl'>Customers</p>
                    </div>
                    <div className='text-center text-primary'>
                        <CashIcon className='mx-auto h-24' />
                        <h2 className='text-5xl font-bold py-1'>120M+</h2>
                        <p className='text-xl'>Annual Revenue</p>
                    </div>
                    <div className='text-center text-primary'>
                        <AnnotationIcon className='mx-auto h-24' />
                        <h2 className='text-5xl font-bold py-1'>33K+</h2>
                        <p className='text-xl'>Reviews</p>
                    </div>
                    <div className='text-center text-primary'>
                        <CubeIcon className='mx-auto h-24' />
                        <h2 className='text-5xl font-bold py-1'>50+</h2>
                        <p className='text-xl'>Tools</p>
                    </div>
                </div>
            </div>
            <QuoteReq />
        </>
    );
};

export default Summary;