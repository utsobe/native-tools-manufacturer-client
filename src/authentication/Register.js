import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../shared/Loading';
import { toast } from 'react-toastify';
import useToken from '../hooks/useToken';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendEmailVerification, sending, vError] = useSendEmailVerification(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser);

    let from = location.state?.from?.pathname || '/';

    if (loading || gLoading || sending || updating) {
        return <Loading></Loading>;
    }

    if ((token) && !error) {
        navigate(from, { replace: true });
        if (user.user.uid || gUser.user.uid) {
            toast.success('Registered successfully', {
                toastId: 'resgistered'
            });
            toast.success('Verification email send', {
                toastId: 'verificaiton'
            });
        }
    }

    if (error || gError) {
        if (error.message.includes('auth/email-already-in-use')) {
            toast.error('Already registered', {
                toastId: 'error'
            });
        }
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await sendEmailVerification();
        await updateProfile({ displayName: data.name });
    };

    return (
        <div className='flex justify-center items-center h-screen px-4 my-4'>
            <div className='card bg-base-100 w-full max-w-sm px-10 pb-10'>
                <h2 className='text-3xl text-secondary font-bold text-center py-5'>Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register('name', {
                            required: 'Name required'
                        })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <label className="label">
                            {errors?.name && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email', {
                            required: 'Email required',
                            pattern: {
                                value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                                message: 'Invalid Email'
                            }
                        })} type="email" placeholder="Type here" className="input input-bordered w-full" />
                        <label className="label">
                            {errors?.email && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password', {
                            required: 'Password required',
                            minLength: {
                                value: 6,
                                message: 'Password too short'
                            }
                        })} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors?.password && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                        </label>
                    </div>

                    <input className='btn btn-secondary w-full' type="submit" value='register' />
                </form>
                <p className='text-center pt-3'>Already have an account? <Link to='/login' className='text-secondary link link-hover'>Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline btn-primary'>continue with google</button>
            </div>

        </div>
    );
};

export default Register;