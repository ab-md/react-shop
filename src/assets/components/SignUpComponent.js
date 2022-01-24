import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { myAlert } from '../scripts/MyAlert';
import { formValidation } from '../scripts/formValidation';
import '../styles/signings.css';
import signupAction from '../../redux/signUp/signupAction';

const SignUpComponent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    });

    const {name, email, password} = userInfo;
 
    const [errors, setErrors] = useState({});

    const [focused, setFocused] = useState({});

    useEffect(() => {
        setErrors(formValidation(userInfo, 'signUp'));
        // console.log(errors);
    }, [userInfo, focused])

    const enterInfo = event => {
        if (event.target.name === "isAccepted") {
            setUserInfo({
                ...userInfo,
                [event.target.name]: event.target.checked
            })
        } else {
            setUserInfo({
                ...userInfo,
                [event.target.name]: event.target.value
            })
        }

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
            dispatch(signupAction(name, email, password));
            myAlert('ثبت نام با موفقیت انجام شد.', 'success');
            navigate('/shop');
        } else {
            setFocused({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }

    return (
        <div className='singings-container'>

            <form className='form-container' onSubmit={submitHandler}>

                <p className='header'>SIGN UP</p>

                <div className='form-field'>
                    <label>نام</label>
                    <input
                        className={(errors.name && focused.name) ? 'uncompleted' : 'form-input'}
                        type="text" name="name" value={userInfo.name} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.name && focused.name && <span>{errors.name}</span>}
                </div>

                <div className='form-field'>
                    <label>ایمیل</label>
                    <input
                        className={(errors.email && focused.email) ? 'uncompleted' : 'form-input'} type="text" name="email" value={userInfo.email} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.email && focused.email && <span>{errors.email}</span>}
                </div>

                <div className='form-field'>
                    <label>رمز عبور</label>
                    <input
                        className={(errors.password && focused.password) ? 'uncompleted' : 'form-input'} type="password" name="password" value={userInfo.password} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.password && focused.password && <span>{errors.password}</span>}
                </div>

                <div className='form-field'>
                    <label>تأیید رمز عبو</label>
                    <input
                        className={(errors.confirmPassword && focused.confirmPassword) ? 'uncompleted' : 'form-input'} type="password" name="confirmPassword" value={userInfo.confirmPassword} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.confirmPassword && focused.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <div className='checkbox-container'>
                    <div>
                        <input type="checkbox" name="isAccepted" value={userInfo.isAccepted} onChange={enterInfo} onFocus={focusHandler} />
                        <label>قوانین و مقررات را خوانده و موافقم.</label>
                    </div>
                    {errors.isAccepted && focused.isAccepted && <span>{errors.isAccepted}</span>}
                </div>

                <div className='form-buttons'>
                    <button>ثبت نام</button>
                    <Link to='/login'>ورود</Link>
                </div>

            </form>

        </div>
    );
}

export default SignUpComponent;
