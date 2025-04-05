// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./BoxCourses.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import imgcourses from "./../../assets/images/wp2_1-1-768x432.webp";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import caracter from "./../../assets/images/01.jpeg";
import NorthWestIcon from '@mui/icons-material/NorthWest';
import CourseBox from "../CourseBox/CourseBox";
export default () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="col-3">
            <SwiperSlide>
             <CourseBox/>
            </SwiperSlide>
            <SwiperSlide>
             <CourseBox/>
            </SwiperSlide>
            <SwiperSlide>
             <CourseBox/>
            </SwiperSlide>
            <SwiperSlide>
             <CourseBox/>
            </SwiperSlide>
            <SwiperSlide>
             <CourseBox/>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
