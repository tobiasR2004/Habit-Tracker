import React from 'react'
import InitComponent from './components/InitComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuComponent from './components/menucomponents/MenuComponent'
import  ManageHabits  from './components/menucomponents/ManageHabits'
import './App.css'; 


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitComponent />} />
        <Route path="/Menu" element={<MenuComponent />} />
        <Route path="/ManageHabits" element={<ManageHabits />} />
      </Routes>
    </BrowserRouter>
    </>
  ) 
}

export default App
