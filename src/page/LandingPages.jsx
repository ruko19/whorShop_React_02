import React from 'react';
import Header from "../components/Header";
import MainTop from "../components/MainTop";
import MainNav from "../components/MainNav";
import MainBot from "../components/MainBot";
import Footer from "../components/Footer";

const LandingPages = () => {
    return (
        <>
            <Header />
            <MainTop />
            <MainNav />
            <MainBot />
            <Footer />
        </>
    );
};

export default LandingPages;