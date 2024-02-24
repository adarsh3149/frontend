import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import {About} from './components/About'
import Services from './components/Services'
import Navbar from './components/Navbar'
import { Logout } from './components/Logout'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </>
  )
}

export default App