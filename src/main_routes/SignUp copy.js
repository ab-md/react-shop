import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../assets/components/Footer';
import Header from '../assets/components/Header';
import Navbar from '../assets/components/Navbar';

import { formValidation } from '../assets/scripts/formValidation';

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    });

    const [errors, setErrors] = useState({});

    const [focused, setFocused] = useState({});

    useEffect(() => {
        setErrors(formValidation(userInfo, 'signUp'));
        console.log(errors);
    }, [userInfo, focused])

    const enterInfo = event => {
        if(event.target.name === "isAccepted") {
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
            alert('submitted successfuly');
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
        <div>
            <Header />
            <Navbar />

            <h2>SIGN UP</h2>

            <form onSubmit={submitHandler}>
                <div>
                    <label>نام</label>
                    <input type="text" name="name" value={userInfo.name} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.name && focused.name && <p>{errors.name}</p>}
                </div>
                
                <div>
                    <label>ایمیل</label>
                    <input type="text" name="email" value={userInfo.email} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.email && focused.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label>رمز عبور</label>
                    <input type="password" name="password" value={userInfo.password} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.password && focused.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <label>تأیید رمز عبو</label>
                    <input type="password" name="confirmPassword" value={userInfo.confirmPassword} onChange={enterInfo} onFocus={focusHandler} />
                    {errors.confirmPassword && focused.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>

                <div>
                    <input type="checkbox" name="isAccepted" value={userInfo.isAccepted} onChange={enterInfo} onFocus={focusHandler} />
                    <label>قوانین و مقررات را خوانده و موافقم.</label>
                    {errors.isAccepted && focused.isAccepted && <p>{errors.isAccepted}</p>}
                </div>

                <div>
                    <button>ثبت نام</button>
                    <Link to='/login'>ورود</Link>
                </div>

            </form>

            <Footer />
        </div>
    );
}

export default SignUp;
