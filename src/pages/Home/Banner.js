import React from 'react';
import bannerImage from '../../assets/banner-image/banner-img1.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen lg:max-w-7xl mx-auto lg:px-12">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} class="sm:max-w-sm lg:max-w-lg rounded-lg mb-10" alt='...' />
                <div>
                    <h1 class="text-5xl text-secondary font-bold">Best Quality Professional Tools Manufacturer</h1>
                    <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;