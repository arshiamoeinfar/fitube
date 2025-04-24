import React from 'react'
import Navbar from "./../../components/Navbar/Navbar"
import Header from "./../../components/Header/Header"
import MostPopular from "./../../components/Mostpopular/Most popular"
import Footer from "./../../components/Footer/Footer"
import Wayus from '../../components/WayUs/Wayus'
import BoxCourses from '../../components/BoxCourses/BoxCourses'
import Comments from '../../components/Comments/Comments'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
export default function Index() {
  return (
    <>
        <Navbar />
         <Header />
         <Wayus/>
         <MostPopular titleName="بهترین ویدیو های " text="منتشر شده" btnText="همه ی دوره ها" icon={<OndemandVideoOutlinedIcon fontSize='large' style={{color: "white"}}/>}/>
         <BoxCourses/>
         <Comments isShowTitleRight={true}/>
        <Footer />
    </>
  )
}
