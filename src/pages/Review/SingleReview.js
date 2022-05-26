import React from 'react';

const SingleReview = ({ reviewInfo }) => {
    const { name, image, review, rating } = reviewInfo;

    return (
        <div>
            <div className="card bg-base-100 drop-shadow-xl h-full text-center">
                <div className="card-body">
                    <p>{review}</p>
                    <p className='font-bold'>Rating: {rating}</p>
                    <div className="avatar mx-auto mt-3 mb-2">
                        <div className="w-14 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={image ? image : 'https://api.lorem.space/image/face?hash=3174'} alt='' />
                        </div>
                    </div>
                    <h2 className='text-xl font-bold'>{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;

// They're purposeful and deliberate, and once they commit, their work is timely and accurate to what they promise.

//Their staff is responsible and filled with experts. They handle the customer with care and support.

//Outside of being a very professional team with talented engineers and great customer service, they’re very personable