import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/product'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
// import Footer from './components/footer'




import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
     

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>

       
      </BrowserRouter>

    </>
  )
}

export default App
