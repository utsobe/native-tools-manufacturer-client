import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/review').then(res => setReviews(res.data));
    }, []);
    return (
        <div className='my-20'>
            <div className='lg:max-w-7xl mx-auto lg:px-12'>
                <h2 className='text-secondary text-4xl font-bold my-12 text-center'>Our Client Says</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4'>
                    {
                        reviews.map(reviewInfo => <SingleReview key={reviewInfo._id} reviewInfo={reviewInfo}></SingleReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;