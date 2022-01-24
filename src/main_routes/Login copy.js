import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { formValidation } from '../assets/scripts/formValidation';
import Footer from '../assets/components/Footer';
import Header from '../assets/components/Header';
import Navbar from '../assets/components/Navbar';

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const [focused, setFocused] = useState({});

    useEffect(() => {
        setErrors(formValidation(userInfo, 'login'));
        console.log(errors);
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
            alert('submitted successfuly');
        } else {
            setFocused({
                email: true,
                password: true,
            })
        }
    }
    return (
        <div>
            <Header />
            <Navbar />

            <h2>LOGIN</h2>

            <form onSubmit={submitHandler}>

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
                    <button>ورود</button>
                    <Link to='/sign_up'>ثبت نام</Link>
                </div>

            </form>

            <Footer />
        </div>
    );
}

export default Login;
