import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from '../../redux/login/loginAction';
import userAction from '../../redux/user/userAction';
import { myAlert } from '../scripts/MyAlert';
import ordersAction from '../../redux/user_orders/ordersAction';

import '../styles/profile.css';
import loadingGif from '../images/loading/Gear-darkblue.svg';

const Profile = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signupUser = useSelector(state => state.signupStates);
    const siteUser = useSelector(state => state.userState);
    const myorders = useSelector(state => state.ordersState);
    const { name } = siteUser.userData;

    useEffect(() => {
        Object.keys(signupUser.data).length &&
            dispatch(userAction());
    }, [signupUser, dispatch])

    useEffect(() => {
        Object.keys(signupUser.data).length &&
            dispatch(ordersAction());
    }, [signupUser.data, dispatch])

    const signOutUser = (user) => {
        dispatch(signOut(user));
        myAlert('شما از حساب کاربری خود خارج شدید!', 'warning')
        navigate('/login');
    }

    return (
        <div dir='ltr'>
            {
                siteUser.loading ?
                    <div className='loading-container'>
                        <img src={loadingGif} alt='loading' />
                    </div>
                    : siteUser.error ?
                        myAlert('مشکلی پیش آمده است.<br />دوبره امتحان کنید.', 'error') :
                        Object.keys(siteUser.userData).length ?
                            <div className='profile-info'>
                                <div style={{ textAlign: 'center' }}>
                                    <p>Dear <span style={{ color: '#1a73e8' }}>{name}</span></p>
                                    <p>Welcome to your Profile.</p>
                                    <p>In this page you can see your acount information and the orders you've done till now.</p>
                                </div>
                                <div className='profile-actions'>
                                    <Link to='/profile/edit' className='btn btn-primary'>Edit Profile</Link>
                                    <button onClick={() => signOutUser(signupUser)} className='btn btn-outline-danger'>Log Out</button>
                                </div>
                            </div> :
                            <>
                                <div className='alert alert-danger text-center container mt-3'>شما هنوز وارد حساب کاربری خود نشده اید!</div>
                                <div className='unSigned'>
                                    <Link to='/sign_up' className='btn btn-outline-primary'>ایجاد حساب کاربری</Link>
                                    <Link to='/login' className='btn btn-primary'>ورود به حساب کاربری</Link>
                                </div>
                            </>
            }
            {
                Object.keys(signupUser.data).length ?
                    myorders.loading ?
                        <div className='loading-container'>
                            <p className='h3' dir='ltr'>Loading...</p>
                        </div>
                        : myorders.error ?
                            myAlert('مشکلی پیش آمده است.<br />دوبره امتحان کنید.', 'error')
                            : myorders.ordersData.length ?
                                <div className='mt-4' style={{ width: '100%' }}>
                                    <p className='h3 text-center mb-4'>Your Orders: </p>
                                    <div className='orders-container'>
                                        {
                                            myorders.ordersData.map(order =>
                                                <div className='order' key={order._id}>
                                                    <div className='orders-info'>
                                                        <p>
                                                            <span>Address: </span>
                                                            <span>{order.shippingAddress.address} / {order.shippingAddress.city}</span>
                                                        </p>
                                                        <p>
                                                            <span>Postal Code: </span>
                                                            <span>{order.shippingAddress.postalCode}</span>
                                                        </p>
                                                        <p>
                                                            <span>Phone Number: </span>
                                                            <span>{order.shippingAddress.phone}</span>
                                                        </p>
                                                        <p>
                                                            <span>Total Price: </span>
                                                            <span>{order.totalPrice}</span>
                                                        </p>
                                                        <p>
                                                            <span>Payment Method: </span>
                                                            <span>{order.paymentMethod}</span>
                                                        </p>
                                                        <p>
                                                            <span>Payment Status: </span>
                                                            <span>{order.isPaid ? <span className='isTrue'>Payed</span> : <span className='isFalse'>Not Payed</span>}</span>
                                                        </p>
                                                        <p>
                                                            <span>Deliver Status: </span>
                                                            <span>{order.isDelivered ? <span className='isTrue'>Delivered</span> : <span className='isFalse'>Not Delivered</span>}</span>
                                                        </p>
                                                        <p>
                                                            <span>Order ID: </span>
                                                            <span>{order._id}</span>
                                                        </p>
                                                        {/* <p>
                                                            <Link to={`/profile/order${order._id}`}>Order Details</Link>
                                                        </p> */}
                                                    </div>
                                                    <div className='orders-details'>
                                                        {
                                                            order.orderItems.map((item, index) =>
                                                                <div className='orders-product' key={item._id}>
                                                                    <div className='order-product'>
                                                                        <div>
                                                                            <p>Item: <span className='badge bg-danger'>{index + 1}</span></p>
                                                                            <img src={item.image} alt='product' />
                                                                        </div>
                                                                        <div className='order-product-info'>
                                                                            <p className='product-name'>{item.name}</p>
                                                                            <p>Price: <span className='badge bg-info'>{item.price} $</span></p>
                                                                            <p>Quantity: <span className='badge bg-warning'>{item.qty}</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>

                                : <div className='container'>
                                    <div className='alert alert-info text-center'>You don't have any orders yet.
                                        <br />Want to buy anything?</div>
                                    <Link to='/shop' className='btn btn-primary'>Go to Shop</Link>
                                </div>
                    : ''
            }
        </div>
    );
}

export default Profile;
