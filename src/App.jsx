import React from 'react'
import Home from './components/Home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './components/CartPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App