import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../shared/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || '/';

    if (loading) {
        return <Loading />;
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
        console.log('login success');
        navigate(from, { replace: true });
    };

    return (
        <div className='flex justify-center items-center h-screen px-4'>
            <div className='card bg-base-100 w-full max-w-sm px-10 pb-10'>
                <h2 className='text-3xl text-secondary font-bold text-center py-5'>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input {...register('email', {
                            required: 'Email required',
                            pattern: {
                                value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                                message: 'Invalid Email'
                            }
                        })} type="text" placeholder="Type here" class="input input-bordered w-full" />
                        <label class="label">
                            {errors?.email && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input {...register('password', {
                            required: 'Password required',
                            minLength: {
                                value: 6,
                                message: 'Password too short'
                            }
                        })} type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            {errors?.password && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                        </label>
                    </div>
                    <p className='link link-hover'><small>Forget Password?</small></p>

                    <input className='btn btn-secondary mt-5 w-full' type="submit" value='login' />
                </form>
                <p className='text-center pt-3'>Don't have an account? <Link to='/register' className='text-secondary link link-hover'>Register</Link></p>
                <div class="divider">OR</div>
                <button className='btn btn-outline btn-secondary'>continue with google</button>
            </div>
        </div>
    );
};

export default Login;