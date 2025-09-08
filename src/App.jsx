import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'
import MyBookings from './pages/MyBookings'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <NavBar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/car-details/:id' element={<CarDetails />} />
        <Route path='/mybookings' element={<MyBookings />} />
      </Routes>
    </>
  )
}

export default App
