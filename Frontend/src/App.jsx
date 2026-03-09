
import Home from './home/Home'
import Courses from './courses/Courses.jsx'
import { Toaster } from 'react-hot-toast'
import { Routes, Route, Navigate } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import { useAuth } from './context/AuthProvider.jsx'

const App = () => {
  const [authUser, setAuthUser] = useAuth();
    
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={authUser?<Courses />:<Navigate to='/'/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
    </Routes>
      <Toaster/>
    </>



  )
}

export default App