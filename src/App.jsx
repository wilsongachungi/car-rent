import React from 'react'
import NavBar from './components/NavBar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');
  return (
    <>
      {!isOwnerPath && <NavBar setShowLogin={setShowLogin}/>}
    </>
  )
}

export default App
