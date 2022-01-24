import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link to='/'>صفحه اصلی</Link>
                </li>
                <li>
                    <Link to='/about_us'>درباره ما</Link>
                </li>
                <li>
                    <Link to='/shop'>محصولات</Link>
                </li>
                <li>
                    <Link to='/contact_us'>ارتباط با ما</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;