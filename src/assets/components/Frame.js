import React from 'react';

import '../styles/frame.css';

const Frame = ({ imgSrc }) => {
    return (
        <div className='frame-container'>
            <div className='frame'>
                <img className='frame-image' src={imgSrc} alt='product' />
            </div>
        </div>
    );
}

export default Frame;
