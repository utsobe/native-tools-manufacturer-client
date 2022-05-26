import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = async data => {
        const review = {
            image: user.photoURL,
            name: user.displayName,
            email: user.email,
            review: data.review,
            rating: data.rating
        }

        axios.post('https://damp-tor-10320.herokuapp.com/review', review).then(res => {
            if (res.data.insertedId) {
                toast.success('Review added successfully');
                reset();
            }
        })
    };
    return (
        <div className='flex justify-center items-center min-h-screen mx-4'>
            <div className="card max-w-xl bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-2xl text-secondary font-bold'>Hi! Please Leave Us Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Write about us!</span></label>
                            <textarea {...register('review', {
                                required: 'Please write something about us!',
                                maxLength: {
                                    value: 250,
                                    message: 'Please complete in 250 letter'
                                }
                            })} type="text" placeholder="Type here. . ." className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors?.review && <span className="label-text-alt text-error">{errors.review.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Rate us! between (1-5)</span></label>
                            <input {...register('rating', {
                                required: 'Rating required',
                                min: {
                                    value: 1,
                                    message: "Rating can't less than 1"
                                },
                                max: {
                                    value: 5,
                                    message: "Rating can't greater than 5"
                                }
                            })} type="number" placeholder="Rating. . ." className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors?.rating && <span className="label-text-alt text-error">{errors.rating.message}</span>}
                            </label>
                        </div>

                        <input className='btn btn-secondary w-full' type="submit" value='add review' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;