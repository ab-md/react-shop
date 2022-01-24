import React from 'react';
import Frame from './Frame';

import '../styles/frameShowcase.css';

import headphone1 from '../images/products/headphone1.jpg';
import calculator1 from '../images/products/calculator1.jpg';
import setar1 from '../images/products/3tar1.jpg';

const Frameshowcase = () => {
    return (
        <div className='frame-showcase'>
            <Frame imgSrc={headphone1} />
            <Frame imgSrc={setar1} />
            <Frame imgSrc={calculator1} />
        </div>
    );
}

export default Frameshowcase;
