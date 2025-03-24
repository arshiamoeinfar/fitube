import React from 'react'
import Navbar from "./../../components/Navbar/Navbar"
import Footer from '../../components/Footer/Footer'
import CartPremium from "./../../components/CartPermium/CartPremium"
import MovieHeader from "../../components/MovieHeader/VideoPlayer"
import move from "./../../assets/videos/video5972191431412946595.mp4"
import coverImage from "./../../assets/images/movie.png"
export default function Movie() {
  return (
    <div className='container-fluid bg-black'>
    <Navbar />
    <MovieHeader url={move} coverImage={coverImage} />
    <CartPremium />
    <Footer/>
    </div>
  )
}
