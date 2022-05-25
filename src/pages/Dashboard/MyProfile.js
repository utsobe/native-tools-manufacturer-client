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

    const url = `http://localhost:5000/user?email=${user?.email}`;

    const { data: updatedUser, isLoading, refetch } = useQuery(['user', user.email], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    console.log(updatedUser);

    if (isLoading) {
        return <Loading />;
    }

    const { address, education, phone, linkedin } = updatedUser;

    const onSubmit = async data => {
        console.log(data);

        axios.put(`http://localhost:5000/user?email=${user?.email}`, data).then(res => {
            console.log(res.data);
            refetch();
            if (res.data.upsertedCount || res.data.modifiedCount) {
                toast.success('Profile updated');
            }
        });
    }
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content w-full flex-col lg:flex-row gap-12">
                    {/* main profile */}
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="avatar mx-auto">
                                <div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
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
                            {/* <div class="form-control mt-6">
                                <button class="btn btn-secondary">update</button>
                            </div> */}
                        </div>
                    </div>
                    {/* update profile */}
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control mb-2">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input {...register('phone')} type="number" placeholder="Phone" class="input input-bordered" />
                                </div>
                                <div class="form-control mb-2">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input {...register('address')} type="text" placeholder="Address" class="input input-bordered" />
                                </div>
                                <div class="form-control mb-2">
                                    <label className="label">
                                        <span className="label-text">Education</span>
                                    </label>
                                    <input {...register('education')} type="text" placeholder="Education" class="input input-bordered" />
                                </div>
                                <div class="form-control mb-2">
                                    <label className="label">
                                        <span className="label-text">Linkedin</span>
                                    </label>
                                    <input {...register('linkedin')} type="text" placeholder="Linkedin Url" class="input input-bordered" />
                                </div>
                                <input type='submit' value='update' class="btn btn-secondary w-full mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;