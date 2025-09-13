import { useState } from 'react'
import ReactLogo from './assets/react.svg'
import ViteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Landingpage from './pages/landingpage'

function App() {
  const [Count, SetCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
    </Routes>
  )
}

export default App
