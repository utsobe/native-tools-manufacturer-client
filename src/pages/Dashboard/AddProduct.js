import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        axios.post('http://localhost:5000/tool', data, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.data.insertedId) {
                toast.success('Tool added successfully');
                reset();
            };
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen mx-4'>
            <div class="card max-w-xl bg-base-100 shadow-2xl">
                <div class="card-body">
                    <h2 className='text-2xl text-secondary font-bold'>Add New Manufactured Tool</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* image  */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label"><span class="label-text">Image Url</span></label>
                            <input {...register('image', {
                                required: 'Image url required',
                            })} type="text" placeholder="Image url" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors?.image && <span class="label-text-alt text-error">{errors.image.message}</span>}
                            </label>
                        </div>
                        {/* name  */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label"><span class="label-text">Tool Name</span></label>
                            <input {...register('name', {
                                required: 'Tool name url required',
                            })} type="text" placeholder="Tool Name" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors?.name && <span class="label-text-alt text-error">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* description */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label"><span class="label-text">Short Description</span></label>
                            <textarea {...register('description', {
                                required: 'Description required',
                                maxLength: {
                                    value: 250,
                                    message: 'Please complete in 250 letter'
                                }
                            })} type="text" placeholder="Short Description. . ." class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors?.description && <span class="label-text-alt text-error">{errors.description.message}</span>}
                            </label>
                        </div>
                        {/* price */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label"><span class="label-text">Price</span></label>
                            <input {...register('price', {
                                required: 'Price required',
                            })} type="number" placeholder="Price" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors?.price && <span class="label-text-alt text-error">{errors.price.message}</span>}
                            </label>
                        </div>
                        {/* moq */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label"><span class="label-text">Minimum Order Quantity</span></label>
                            <input {...register('moq', {
                                required: 'Minimum order quantity required',
                            })} type="number" placeholder="Minimum Order Quantity" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors?.moq && <span class="label-text-alt text-error">{errors.moq.message}</span>}
                            </label>
                        </div>
                        {/* quantity */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label"><span class="label-text">Available Quantity</span></label>
                            <input {...register('quantity', {
                                required: 'Available Quantity required',
                            })} type="number" placeholder="Available Quantity" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors?.quantity && <span class="label-text-alt text-error">{errors.quantity.message}</span>}
                            </label>
                        </div>

                        <input className='btn btn-secondary w-full mt-3' type="submit" value='add review' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;