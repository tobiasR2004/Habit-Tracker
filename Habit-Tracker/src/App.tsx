import React from 'react'
import InitComponent from './components/LoginComponents/InitComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  ManageHabits  from './components/menucomponents/ManageHabits'
import './App.css'; 


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/Menu" element={<InitComponent />} />
        <Route path="/ManageHabits" element={<ManageHabits />} />
      </Routes>
    </BrowserRouter>
    </>
  ) 
}

export default App
