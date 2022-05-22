import React from 'react';
import imgAlt from '../../assets/img-alt.png';

const SingleTool = ({ tool }) => {
    const { image, name, description, price, moq, quantity } = tool;
    return (
        <div>
            <div class="card bg-base-100 drop-shadow-xl ">
                <figure class="px-10 pt-10">
                    <img src={image ? image : imgAlt} alt="" class="rounded-xl " />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='font-bold'>${price} / Unit</p>
                    <div className='flex justify-between items-center'>
                        <div>
                            <span className='ms-10'>MOQ: {moq} Units</span>
                            <h2 className='text-xl'>Available: {quantity} Units</h2>
                        </div>
                        <div class="card-actions">
                            <button class="btn btn-secondary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTool;