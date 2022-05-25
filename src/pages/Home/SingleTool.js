import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgAlt from '../../assets/img-alt.png';

const SingleTool = ({ tool }) => {
    const { _id, image, name, description, price, moq, quantity } = tool;
    const navigate = useNavigate();
    return (
        <div>
            <div className="card bg-base-100 drop-shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={image ? image : imgAlt} alt="" className="rounded-xl hover:scale-110 transition duration-700 ease-in-out" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='font-bold'>${price} / Unit</p>
                    <div className='flex justify-between items-center'>
                        <div>
                            <span className='ms-10'>MOQ: {moq} Units</span>
                            <h2 className='text-xl'>Available: {quantity} Units</h2>
                        </div>
                        <div className="card-actions">
                            <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-secondary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTool;