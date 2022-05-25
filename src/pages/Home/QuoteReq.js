import React from 'react';

const QuoteReq = () => {
    return (
        <div className='lg:max-w-7xl mx-auto lg:px-12 mt-[-70px] px-4'>
            <div className="card w-full bg-base-100 shadow-2xl">
                <div className="grid lg:grid-cols-2 lg:gap-12 p-10">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary">Have any question about us or get a products request ?</h2>
                        <p className='text-xl pt-1 sm:pb-4'>Dont't hesitate to contact us</p>
                    </div>
                    <div className='flex justify-around items-center'>
                        <div>
                            <button className="btn btn-secondary mt-6 mb-4 mr-6">request for quote</button>
                            <button className="btn btn-primary">contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteReq;