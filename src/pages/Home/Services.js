import React from 'react';
import customize from '../../assets/services/screwdriver-wrench-solid.svg';
import industry from '../../assets/services/industry-solid.svg';
import shipping from '../../assets/services/ship-solid.svg';
import fast from '../../assets/services/gauge-simple-high-solid.svg';

const Services = () => {
    return (
        <div className='lg:max-w-7xl mx-auto mb-20 lg:px-12'>
            <h2 className='text-4xl font-bold text-center my-12 text-secondary'>Who We Are?</h2>
            <div className='grid lg:grid-cols-4 gap-12'>
                <div className='bg-secondary rounded-xl p-12'>
                    <img className='w-20 h-20 mx-auto' src={industry} alt="" />
                    <h2 className='text-2xl text-center mt-3 font-bold'>Manufacturer</h2>
                </div>
                <div className='bg-secondary rounded-xl p-12'>
                    <img className='w-20 h-20 mx-auto' src={customize} alt="" />
                    <h2 className='text-2xl text-center mt-3 font-bold'>Customizer</h2>
                </div>
                <div className='bg-secondary rounded-xl p-12'>
                    <img className='w-20 h-20 mx-auto' src={fast} alt="" />
                    <h2 className='text-2xl text-center mt-3 font-bold'>Quicker</h2>
                </div>
                <div className='bg-secondary rounded-xl p-12'>
                    <img className='w-20 h-20 mx-auto' src={shipping} alt="" />
                    <h2 className='text-2xl text-center mt-3 font-bold'>Shipping</h2>
                </div>
            </div>
        </div>
    );
};

export default Services;