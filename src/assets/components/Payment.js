import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import paymentAction from '../../redux/payment/paymentAction';

import { myAlert } from '../scripts/MyAlert';
import { payValidation } from '../scripts/formValidation';
import { clearCart } from '../../redux/cart/actions';

const Payment = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartState);
    const user = useSelector(state => state.signupStates);

    useEffect(() => {
        if (!Object.keys(user.data).length) {
            navigate('/login');
            myAlert('ابتدا وارد حساب کاربری خود شوید!', 'warning');
        } else if (!cart.cart.length) {
            navigate('/shop');
            myAlert('شما محصولی انتخاب نکرده‌اید!', 'warning');
        }
    }, [cart.cart.length, user.data, navigate])

    const [userInfo, setUserInfo] = useState({
        address: "",
        city: "",
        postalCode: "",
        phone: ""
    });

    const [errors, setErrors] = useState({});

    const [focused, setFocused] = useState({});

    useEffect(() => {
        setErrors(payValidation(userInfo));
        // console.log(errors);
    }, [userInfo, focused])

    const enterInfo = event => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        })
    }

    const focusHandler = (event) => {
        setFocused({
            ...focused,
            [event.target.name]: true
        })
    }

    const submitHandler = event => {
        event.preventDefault();

        if (!Object.keys(errors).length) {
            dispatch(paymentAction(cart, userInfo));
            dispatch(clearCart());
            myAlert('پرداخت با موفقیت انجام شد.', 'success');
            console.log('OK');
            navigate('/done');
        } else {
            setFocused({
                address: true,
                city: true,
                postalCode: true,
                phone: true
            })
        }
    }

    return (
        <div className='singings-container'>

            <form className='form-container' onSubmit={submitHandler}>

                <p className='header'>صفحه پرداخت</p>

                <div className='form-field'>
                    <label>آدرس</label>
                    <input
                        className={(errors.address && focused.address) ? 'uncompleted' : 'form-input'}
                        type="text" name="address" value={userInfo.address} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.address && focused.address && <span>{errors.address}</span>}
                </div>

                <div className='form-field'>
                    <label>شهر</label>
                    <input
                        className={(errors.city && focused.city) ? 'uncompleted' : 'form-input'} type="text" name="city" value={userInfo.city} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.city && focused.city && <span>{errors.city}</span>}
                </div>

                <div className='form-field'>
                    <label>کد پستی</label>
                    <input
                        className={(errors.postalCode && focused.postalCode) ? 'uncompleted' : 'form-input'} type="text" name="postalCode" value={userInfo.postalCode} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.postalCode && focused.postalCode && <span>{errors.postalCode}</span>}
                </div>

                <div className='form-field'>
                    <label>شماره موبایل</label>
                    <input
                        className={(errors.phone && focused.phone) ? 'uncompleted' : 'form-input'} type="text" name="phone" value={userInfo.phone} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.phone && focused.phone && <span>{errors.phone}</span>}
                </div>

                <div className='form-buttons'>
                    <button>پرداخت</button>
                    <Link to='/shop/cart'>بازگشت</Link>
                </div>

            </form>

        </div>
    );
}

export default Payment;
