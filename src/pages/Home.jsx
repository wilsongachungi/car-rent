import React from 'react'
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <>
        <Hero/>
        <FeaturedSection/>
        <Banner/>
        <Testimonials/>
        <Newsletter/>
        </>

    )
}

export default Home;