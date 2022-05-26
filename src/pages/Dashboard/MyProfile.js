import { AcademicCapIcon, BookmarkIcon, InboxInIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import defaultImg from '../../assets/blank-profile.svg';
import linkedinImg from '../../assets/linkedin-in-brands.svg';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const url = `https://damp-tor-10320.herokuapp.com/user/${user?.email}`;

    const { data: updatedUser, isLoading, refetch } = useQuery(['user', user.email], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />;
    }

    const { address, education, phone, linkedin } = updatedUser;

    const onSubmit = async data => {

        axios.put(`https://damp-tor-10320.herokuapp.com/user?email=${user?.email}`, data).then(res => {
            refetch();
            if (res.data.upsertedCount || res.data.modifiedCount) {
                toast.success('Profile updated');
            }
        });
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content w-full flex-col lg:flex-row gap-12">
                    {/* main profile */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="avatar mx-auto">
                                <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                    <img src={defaultImg} alt='' />
                                </div>
                            </div>
                            <div className='mt-10'>
                                <div className='flex items-center mb-3'>
                                    <BookmarkIcon className="h-5 w-5" />
                                    <p className='pl-2'>Name: {user?.displayName}</p>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <InboxInIcon className="h-5 w-5" />
                                    <p className='pl-2'>Email: {user?.email}</p>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <PhoneIcon className="h-5 w-5" />
                                    <p className='pl-2'>Phone: {phone}</p>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <LocationMarkerIcon className="h-5 w-5" />
                                    <p className='pl-2'>Address: {address}</p>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <AcademicCapIcon className="h-5 w-5" />
                                    <p className='pl-2'>Education: {education}</p>
                                </div>
                                <div className='flex items-center mb-3'>
                                    <img className="h-5 w-5" src={linkedinImg} alt="" />
                                    <a href={linkedin} className='pl-2'>{linkedin}</a>
                                </div>
                            </div>
                            {/* <div className="form-control mt-6">
                                <button className="btn btn-secondary">update</button>
                            </div> */}
                        </div>
                    </div>
                    {/* update profile */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control mb-2">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input {...register('phone')} type="number" placeholder="Phone" className="input input-bordered" />
                                </div>
                                <div className="form-control mb-2">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input {...register('address')} type="text" placeholder="Address" className="input input-bordered" />
                                </div>
                                <div className="form-control mb-2">
                                    <label className="label">
                                        <span className="label-text">Education</span>
                                    </label>
                                    <input {...register('education')} type="text" placeholder="Education" className="input input-bordered" />
                                </div>
                                <div className="form-control mb-2">
                                    <label className="label">
                                        <span className="label-text">Linkedin</span>
                                    </label>
                                    <input {...register('linkedin')} type="text" placeholder="Linkedin Url" className="input input-bordered" />
                                </div>
                                <input type='submit' value='update' className="btn btn-secondary w-full mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;