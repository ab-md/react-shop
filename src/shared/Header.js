import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../assets/styles/header.css';
// import logo from '../assets/images/bg&logo/umbrella-solid.svg';
// import logo from '../assets/images/bg&logo/shopify-brands.svg';
import logo from '../assets/images/bg&logo/gem-solid.svg';
// import cartLogo from '../assets/images/icons/shoppingCart.svg';
import cartLogo from '../assets/images/icons/shopping-basket-solid.svg';
import profile from '../assets/images/icons/user-circle-solid.svg';

const Header = () => {

    const cart = useSelector(state => state.cartState);
    const signupUser = useSelector(state => state.signupStates);

    return (
        <div className='header-container'>
            <div className='header-actions'>
                {
                    Object.keys(signupUser.data).length ?
                        <Link to='/profile'>
                            <img src={profile} className='profile-logo' alt='' />
                        </Link>
                        :
                        <>
                            <Link to='/sign_up'>ثبت نام</Link>
                            <Link to='/login'>ورود</Link>
                        </>
                }
            </div>

            <div>
                <Link to='/'>
                    <img
                        className={Object.keys(signupUser.data).length ? 'header-logo-fix' : 'header-logo'}
                        src={logo} alt='logo' />
                </Link>
            </div>

            <div className='cart'>
                <Link to='/shop/cart'>
                    <span className='text-light'>{cart.itemsCounter}</span>
                    <img className='cart-logo' src={cartLogo} alt='logo' />
                </Link>
            </div>
        </div>
    );
}

export default Header;
