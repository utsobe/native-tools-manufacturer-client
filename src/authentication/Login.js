import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../shared/Loading';

const Login = () => {
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, rError] = useSendPasswordResetEmail(
        auth
    );


    if (user || gUser) {
        navigate(from, { replace: true });
    }

    if (loading || gLoading || sending) {
        return <Loading></Loading>;
    }

    if (error) {
        console.log(error.message);
        if (error.message.includes('auth/wrong-password')) {
            toast.error('Incorrect Email or Password', {
                toastId: "customId",
            });
        }
        else if (error.message.includes('auth/user-not-found')) {
            toast.error('Account not registered', {
                toastId: "customId",
            });
        }
        else if (error.message.includes('auth/too-many-requests')) {
            toast.error('Your account is temporarily blocked! Please try again later', {
                toastId: "customId",
            });
        }
        else {
            toast.error(error.message, {
                toastId: "customId",
            });
        }
    }

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
    };

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Reset password email sent', {
                toastId: "customId"
            })
        }
        else {
            toast.error('Please enter your email', {
                toastId: "customId"
            })
        }
    }

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
                        })} type="email" ref={emailRef} placeholder="Type here" class="input input-bordered w-full" />
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
                    <p onClick={handleResetPassword} className='link link-hover'><small>Forget Password?</small></p>

                    <input className='btn btn-secondary mt-5 w-full' type="submit" value='login' />
                </form>
                <p className='text-center pt-3'>Don't have an account? <Link to='/register' className='text-secondary link link-hover'>Register</Link></p>
                <div class="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline btn-primary'>continue with google</button>
            </div>
        </div>
    );
};

export default Login;