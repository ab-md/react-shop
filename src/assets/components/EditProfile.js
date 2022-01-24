import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import editProfileAction from '../../redux/edit_profile/editProfAction';
import userAction from '../../redux/user/userAction';
import { formValidation } from '../scripts/formValidation';
import { myAlert } from '../scripts/MyAlert';

import '../styles/signings.css';
import loadingGif from '../images/loading/Gear-darkblue.svg';

const EditProfile = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signupUser = useSelector(state => state.signupStates);
    const siteUser = useSelector(state => state.userState);

    useEffect(() => {
        Object.keys(signupUser.data).length &&
            dispatch(userAction());
    }, [dispatch, signupUser.data])

    useEffect(() => {
        !Object.keys(signupUser.data).length &&
            navigate('/login');
    }, [navigate, signupUser.data])

    const { name, email } = siteUser.userData;
    // const { name, email } = signupUser.data;

    const [userInfo, setUserInfo] = useState({
        email: Object.keys(siteUser.userData).length ? email : "",
        name: Object.keys(siteUser.userData).length ? name : "",
        password: "",
        confirmPassword: ""
    });

    // const { email, name, password } = userInfo;

    const [errors, setErrors] = useState({});

    const [focused, setFocused] = useState({});

    useEffect(() => {
        setErrors(formValidation(userInfo, 'edit'));
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
            dispatch(editProfileAction(userInfo.name, userInfo.email, userInfo.password));
            myAlert('ثبت نام با موفقیت انجام شد.', 'success');
            navigate('/profile');
        } else {
            setFocused({
                name: true,
                email: true,
                password: true,
                confirmPassword: true
            })
        }
    }

    return (
        <div>
            {
                siteUser.loading ?
                    <div className='loading-container'>
                        <img src={loadingGif} alt='loading' />
                    </div> :
                    siteUser.error ?
                        <p>error</p> :
                        Object.keys(siteUser.userData).length ?
                            <div className='singings-container'>
                                <form className='form-container' onSubmit={submitHandler}>
                                    <p className='header'>ویرایش پروفایل</p>
                                    <div className='form-field'>
                                        <label>Email: </label>
                                        <input name='email' type='text' value={userInfo.email} className='form-input' />
                                    </div>

                                    <div className='form-field'>
                                        <label>Name: </label>
                                        <input name='name' type='text'
                                            // value={userInfo.name}
                                            placeholder={name}
                                            className={(errors.name && focused.name) ? 'uncompleted' : 'form-input'}
                                            onChange={enterInfo}
                                            onFocus={focusHandler}
                                        />
                                        {errors.name && focused.name && <span>{errors.name}</span>}
                                    </div>

                                    <div className='form-field'>
                                        <label>Password: </label>
                                        <input name='password' type='password' value={userInfo.password}
                                            className={(errors.password && focused.password) ? 'uncompleted' : 'form-input'}
                                            onChange={enterInfo}
                                            onFocus={focusHandler}
                                        />
                                        {errors.password && focused.password && <span>{errors.password}</span>}
                                    </div>

                                    <div className='form-field'>
                                        <label>Confirm Password: </label>
                                        <input name='confirmPassword' type='password' value={userInfo.confirmPassword}
                                            className={(errors.confirmPassword && focused.confirmPassword) ? 'uncompleted' : 'form-input'}
                                            onChange={enterInfo}
                                            onFocus={focusHandler}
                                        />
                                        {errors.confirmPassword && focused.confirmPassword && <span>{errors.confirmPassword}</span>}
                                    </div>

                                    <div className='form-buttons'>
                                        <button>اعمال تغییرات</button>
                                        <Link to='/profile'>بازگشت</Link>
                                    </div>
                                </form>
                            </div>
                            :
                            <>
                                <div className='alert alert-danger text-center'>شما هنوز وارد حساب کاربری خود نشده اید!</div>
                                <Link to='/sign_up'>ایجاد حساب کاربری</Link>
                                <Link to='/login' className='btn btn-primary'>ورود به حساب کاربری</Link>
                            </>
            }
        </div>
    );
}

export default EditProfile;
