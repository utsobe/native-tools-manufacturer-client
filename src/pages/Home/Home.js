import React from 'react';
import Reviews from '../Review/Reviews';
import Banner from './Banner';
import Summary from './Summary';
import Tools from './Tools';
import Footer from '../../shared/Footer';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Reviews></Reviews>
            <Footer></Footer>
        </>
    );
};

export default Home;