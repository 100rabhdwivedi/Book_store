
import Home from './home/Home'
import Courses from './courses/Courses.jsx'

import { Routes, Route } from 'react-router-dom'
import LoginModal from './components/LoginModel.jsx'
import SignupModel from './components/SignupModel.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
    </Routes>



  )
}

export default App