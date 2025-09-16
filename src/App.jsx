import { useState } from 'react'
import ReactLogo from './assets/react.svg'
import ViteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Landingpage from './pages/LandingPage'

function App() {
  const [Count, SetCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/p" element={<Login/>}/>
    </Routes>
  )
}

export default App
