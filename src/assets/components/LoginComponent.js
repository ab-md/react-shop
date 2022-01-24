import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { myAlert } from '../scripts/MyAlert';
import { formValidation } from '../scripts/formValidation';
import loginAction from '../../redux/login/loginAction';
import '../styles/signings.css';

const LoginComponent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const {email, password} = userInfo;

    const [errors, setErrors] = useState({});

    const [focused, setFocused] = useState({});

    useEffect(() => {
        setErrors(formValidation(userInfo, 'login'));
    }, [userInfo, focused])

    const enterInfo = event => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        })

        // console.log(userInfo);
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
            dispatch(loginAction(email, password));
            myAlert('با موفقیت وارد شدید.', 'success');
            navigate('/shop');
        } else {
            setFocused({
                email: true,
                password: true,
            })
        }
    }
    return (
        <div className='singings-container login-page'>

            <form onSubmit={submitHandler} className='form-container'>
            <p className='header'>LOGIN</p>

                <div className='form-field'>
                    <label>ایمیل</label>
                    <input
                    className={(errors.email && focused.email) ?  'uncompleted' : 'form-input'} type="text" name="email" value={userInfo.email} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.email && focused.email && <span>{errors.email}</span>}
                </div>

                <div className='form-field'>
                    <label>رمز عبور</label>
                    <input
                    className={(errors.password && focused.password) ?  'uncompleted' : 'form-input'} type="password" name="password" value={userInfo.password} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.password && focused.password && <span>{errors.password}</span>}
                </div>

                <div className='form-buttons'>
                    <button>ورود</button>
                    <Link to='/sign_up'>ثبت نام</Link>
                </div>

            </form>
            
        </div>
    );
}

export default LoginComponent;
