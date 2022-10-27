import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../components/pages/Home'
import Cart from '../components/pages/Cart'
import Shop from '../components/pages/Shop'
import Checkout from '../components/pages/Checkout'
import Signup from '../components/pages/Signup'
import Login from '../components/pages/Login'
import ProductDetails from '../components/pages/ProductDetails'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='home' />}/>
        <Route path='home' element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='shop/:id' element={<ProductDetails />}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='signup' element={<Signup />}/>
        <Route path='login' element={<Login />}/>
        <Route path='checkout' element={<Checkout />}/>
    </Routes>
  )
}

export default Routers