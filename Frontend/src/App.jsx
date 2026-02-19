
import Home from './home/Home'
import Courses from './courses/Courses.jsx'

import { Routes, Route } from 'react-router-dom'
import LoginModal from './components/LoginModel.jsx'
const App = () => {
  return (
     <Routes>
       <Route path='/' element={<Home />} />
     <Route path='/courses' element={<Courses />} />
    </Routes>
    
    
  )
}

export default App