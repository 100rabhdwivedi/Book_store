import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebook from './components/Freebook'
import Navbar from './components/Navbar'
import React from 'react'

const App= () => {
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <Banner/>
    <Freebook/>
    <Footer/>
    </div>
  )
}

export default App