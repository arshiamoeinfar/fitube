import React from 'react'
import Navbar from "./../../components/Navbar/Navbar"
import Footer from '../../components/Footer/Footer'
import MainShop from '../../components/ShoppingCart/MainShop/MainShop'
import SideCart from '../../components/ShoppingCart/SideCart/SideCart'

export default function ShoppingCart() {
  return (
    <>
    <Navbar/>
    <MainShop/>
    <Footer/>
    </>
  )
}
