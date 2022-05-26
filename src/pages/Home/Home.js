import React from 'react';
import Reviews from '../Review/Reviews';
import Banner from './Banner';
import Summary from './Summary';
import Tools from './Tools';
import Footer from '../../shared/Footer';
import Services from './Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Tools></Tools>
            <Summary></Summary>
            <Reviews></Reviews>
            <Footer></Footer>
        </>
    );
};

export default Home;