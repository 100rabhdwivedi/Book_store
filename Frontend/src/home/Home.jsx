import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <div className='overflow-x-hidden pt-20'>
            <Navbar/>
            <Banner />
            <Freebook />
            <Footer />
        </div>
    )
}

export default Home