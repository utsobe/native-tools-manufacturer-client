import React from 'react';
import Loading from '../shared/Loading';

const Blog = () => {
    const loder = true;

    if (loder) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h2 className="text-2xl">This is blog!</h2>
        </div>
    );
};

export default Blog;