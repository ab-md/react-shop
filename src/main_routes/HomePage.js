import React from 'react';
import Banner from '../assets/components/Banner';
import Footer from '../assets/components/Footer';
import Frameshowcase from '../assets/components/FrameShowcase';
import Navbar from '../assets/components/Navbar';

const HomePage = () => {

    return (
        <>
            <Navbar />
            <Banner />
            <Frameshowcase />
            {/* <Cards /> */}
            <Footer />
        </>
    );
};

export default HomePage;