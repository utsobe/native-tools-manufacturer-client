import React from 'react';
import engineer1 from '../../assets/engineer/team-1.jpg';
import engineer2 from '../../assets/engineer/team-2.jpg';
import engineer3 from '../../assets/engineer/team-3.jpg';

const Engineers = () => {
    return (
        <div className='lg:max-w-7xl mx-auto mb-20 lg:px-12'>
            <h2 className='text-4xl font-bold text-center my-12 text-secondary'>Our Engineers</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 mx-4'>
                <div className="card bg-base-100 shadow-xl">
                    <img src={engineer1} alt="" />
                    <div className="card-body text-center">
                        <h2 className="text-xl">Jonathan Scott</h2>
                        <p>CEO</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <img src={engineer2} alt="" />
                    <div className="card-body text-center">
                        <h2 className="text-xl">Benjamin Austin</h2>
                        <p>Chief Engineer</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <img src={engineer3} alt="" />
                    <div className="card-body text-center">
                        <h2 className="text-xl">John Oliver</h2>
                        <p>Industry Manager</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <img src={engineer1} alt="" />
                    <div className="card-body text-center">
                        <h2 className="text-xl">Philip Alvarez</h2>
                        <p>Finanaces</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Engineers;