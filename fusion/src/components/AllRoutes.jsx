import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Pricing from '../Pages/Pricing'
import Course from '../Pages/Course'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Logout from '../Pages/Logout'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/course" element={<Course/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
    </Routes>
  )
}

export default AllRoutes