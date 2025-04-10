import React from 'react'
import Navbar from "./../../components/Navbar/Navbar"
import Header from "./../../components/Header/Header"
// import Category from "./../../components/Category/Category"
import MostPopular from "./../../components/Mostpopular/Most popular"
// import CartPremium from "./../../components/CartPermium/CartPremium"
// import BuyPremium from "./../../components/BuyPremium/BuyPremium"
import Footer from "./../../components/Footer/Footer"
import Wayus from '../../components/WayUs/Wayus'
import BoxCourses from '../../components/BoxCourses/BoxCourses'
import Comments from '../../components/Comments/Comments'
export default function Index() {
  return (
    <>
        <Navbar />
         <Header />
         <Wayus/>
         <MostPopular titleName="بهترین ویدیو های " text="منتشر شده" btnText="همه ی دوره ها"/>
         <BoxCourses/>
         <Comments/>
        <Footer />
    </>
  )
}
