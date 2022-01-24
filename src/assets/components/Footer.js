import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/footer.css';
import telegram from '../images/social/telegram.png';
import whatsapp from '../images/social/whatsapp.png';
import instagram from '../images/social/instagram.png';
import twitter from '../images/social/twitter.png';
import facebook from '../images/social/facebook.png';
import linkedin from '../images/social/linkedin.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-info'>
                <div className='footer-about footer-itemt'>
                    <p className='footer-title'>درباره ما</p>
                    <p>
                        شرکت مِن سوییت با سه شعبه فعال درزمینه‌ی استایل و پوشاک مردانه آماده ارایه خدمات به همکاران، طراحان و مصرف کنندگان می باشد و همچنین بخش عمده ی شهرت و فعالیت اولیه ی این شرکت مربوط به فروش و طراحی پوشاک با کیفیت مردانه در غرفه های نمایشگاهی می باشد.
                    </p>
                </div>

                <div className='footer-links footer-item'>
                    <p className='footer-title'>پیوند های پربازدید</p>
                    <ul>
                        <li>
                            <Link to='/rules'>قوانین و مقررات</Link>
                        </li>
                        <li>
                            <Link to='/privacy_policy'>حریم خصوصی و امنیت</Link>
                        </li>
                        <li>
                            <Link to='/shop'>محصولات</Link>
                        </li>
                    </ul>
                </div>

                <div className='footer-contact footer-item'>
                    <p className='footer-title'>ارتباط با ما</p>
                    <ul>
                        <li>
                            شماره تماس: 09387193829
                        </li>
                        <li>
                            آدرس: تهران، بلوار کشاورز، خیابان وصال شیرازی، نرسیده به ایتالیا، پلاک 18
                        </li>
                        <li>
                            ایمیل:
                            <a href='mailto:abmdofficial@gmail.com'>abmdofficial@gmail.com</a>
                        </li>
                    </ul>
                    <div className='footer-social'>
                        <a href='https://instagram.com/its.me_abolfazl' target='_blank' rel="noreferrer">
                            <img src={instagram} alt='social-logo' />
                        </a>
                        <a href='https://telegram.org' target='_blank' rel="noreferrer">
                            <img src={telegram} alt='social-logo' />
                        </a>
                        <a href='https://wa.me/989387193829?text=%D8%A8%D8%A7%20%D8%B3%D9%84%D8%A7%D9%85.%D8%A7%DB%8C%D9%86%20%DB%8C%DA%A9%20%D9%85%D8%AA%D9%86%20%D8%A2%D9%85%D8%A7%D8%AF%D9%87%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%86%D9%85%D8%A7%DB%8C%D8%B4%20%D8%A8%D9%87%20%D8%B4%D9%85%D8%A7%D8%B3%D8%AA' target='_blank' rel="noreferrer">
                            <img src={whatsapp} alt='social-logo' />
                        </a>
                        <a href='https://twitter.com' target='_blank' rel="noreferrer">
                            <img src={twitter} alt='social-logo' />
                        </a>
                        <a href='https://linkedin.com' target='_blank' rel="noreferrer">
                            <img src={linkedin} alt='social-logo' />
                        </a>
                        <a href='https://facebook.com' target='_blank' rel="noreferrer">
                            <img src={facebook} alt='social-logo' />
                        </a>
                    </div>
                </div>
            </div>

            <div className='footer-copyRight'>
                &copy;1400
                تمام حقوق مادی و معنوی این وب‌سایت محفوظ و متعلق به
                <a href='http://exam.madadiprof.ir' target='_blank' rel="noreferrer">men suit</a>
                می‌باشد.
            </div>
        </div>
    );
}

export default Footer;
