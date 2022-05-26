import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    if (user) {

    }

    useEffect(() => {
        axios.get(`https://damp-tor-10320.herokuapp.com/tool/${id}`).then(res => setTool(res.data));
    }, [id]);

    const onSubmit = data => {
        const totalPrice = data.quantity * tool.price;
        const order = {
            toolId: tool._id,
            toolName: tool.name,
            toolImage: tool.image,
            orderQuantity: data.quantity,
            orderValue: totalPrice,
            buyerName: user.displayName,
            buyerEmail: user.email,
            address: data.address,
            phone: data.phone
        };

        axios.post('https://damp-tor-10320.herokuapp.com/order', order).then(res => {
            if (res.data.insertedId) {
                toast.success(`Order place successfully and your order value $${totalPrice}`);
                navigate('/dashboard/my-order');
            }
        })
    }
    return (
        <div className="bg-white">
            <div className="min-h-screen lg:max-w-7xl mx-auto lg:px-12  py-10">
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex justify-center items-center px-4'>
                        <img src={tool.image} className="sm:max-w-sm lg:max-w-lg mb-12" alt='...' />
                    </div>
                    <div className='flex justify-center'>
                        <div className='card bg-base-100 w-full max-w-sm px-10 pb-10'>
                            <h2 className='text-2xl text-secondary font-bold py-5'>Purchase Details</h2>
                            <h2 className="card-title">{tool.name}</h2>
                            <p className='py-2'>{tool.description}</p>
                            <p className='font-bold mb-1'>${tool.price} / Unit_ & _<span>MOQ: {tool.moq} Units</span></p>
                            <p className='font-bold'></p>
                            <h2 className='text-xl'>Available: {tool.quantity} Units</h2>
                            <h2 className='text-2xl text-secondary font-bold py-5'>Please fill information</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* order quantity */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Order Quantity</span>
                                    </label>
                                    <input {...register('quantity', {
                                        required: 'Quantity required',
                                        min: {
                                            value: tool?.moq,
                                            message: 'Quantity short than MOQ'
                                        },
                                        max: {
                                            value: tool?.quantity,
                                            message: 'Quantity greater than available'
                                        }
                                    })} type="number" placeholder={tool?.moq} className="input input-bordered w-full max-w-xs" />
                                    {errors?.quantity && <span className="label-text-alt text-red-600 py-2">{errors.quantity.message}</span>}
                                </div>
                                {/* name */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" value={user?.displayName} disabled placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                                {/* email */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" value={user?.email} disabled placeholder="Type here" className="input input-bordered w-full" />
                                </div>
                                {/* address */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input {...register('address', {
                                        required: 'Address is required'
                                    })} type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                                    {errors?.address && <span className="label-text-alt text-red-600 py-2">{errors.address.message}</span>}
                                </div>
                                {/* phone */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input {...register('phone', {
                                        required: 'Phone required'
                                    })} type="number" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                                    {errors?.phone && <span className="label-text-alt text-red-600 py-2">{errors.phone.message}</span>}
                                </div>

                                <input className='btn btn-secondary w-full mt-5' type="submit" value='order' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;