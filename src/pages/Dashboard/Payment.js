import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L180MFHmDn9gi8BfEk36I2f9GcNMxZs66VGHy2vxqaU13hhmKqp3hjbOFVd7nnOktHxxMBgqMZ5w4WDrOl1gh1900AXTKbWjF');

const Payment = () => {
    const { id } = useParams();
    const url = `https://damp-tor-10320.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />;
    }

    const { toolName, orderValue, orderQuantity, } = order;

    return (
        <div className='flex justify-center items-center min-h-screen mx-4'>
            <div class="card max-w-xl bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className='text-2xl text-success font-bold'>Please pay for:</h2>
                    <h2 class="card-title">{toolName}</h2>
                    <p>Total quantity: <span className='font-bold'>{orderQuantity} unit</span></p>
                    <p>Total Amount: <span className='text-success font-bold'>${orderValue}</span></p>
                </div>
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;