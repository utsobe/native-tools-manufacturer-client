import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='flex justify-center items-center h-screen px-4'>
            <div className='card bg-base-100 w-full max-w-sm px-10 pb-10'>
                <h2 className='text-3xl text-secondary font-bold text-center py-5'>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full mb-5">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input {...register('email')} type="text" placeholder="Type here" class="input input-bordered w-full" />
                        {/* <label class="label">
                        <span class="label-text-alt">Alt label</span>
                    </label> */}
                    </div>
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input {...register('password', {
                            required: true
                        })} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        {/* <label class="label">
                        <span class="label-text-alt">Alt label</span>
                    </label> */}
                    </div>
                    <p className='link link-hover'><small>Forget Password?</small></p>

                    <input className='btn btn-secondary mt-5 w-full' type="submit" />
                </form>
                <p className='text-center pt-3'>Don't have an account? <span className='text-secondary link link-hover'>Register</span></p>
                <div class="divider">OR</div>
                <button className='btn btn-outline btn-secondary'>continue with google</button>
            </div>
        </div>
    );
};

export default Login;