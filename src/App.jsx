import React from "react";
import LoginPage from "./pages/login";
import Register from "./pages/register";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<LoginPage />}/>
    </Routes>
  )
}
export default App
  
