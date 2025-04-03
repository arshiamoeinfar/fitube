import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import CommentIcon from '@mui/icons-material/Comment';
import "./Comments.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import imgcourses from "./../../assets/images/01.jpeg";

const testimonials = [
  {
    text: "وبسایت شما به خوبی به نیازها و سطح دانش کاربران پاسخ می‌دهد. از مبتدیان تا حرفه‌ایان، می‌توانند از محتواهای آموزشی شما بهره‌بردند. این گسترده‌بودن پوشش محتوا بسیار قابل قدردانی است.",
    name: "جلال بهرامی راد",
    course: "دوره پروژه محور React و Next",
    image: imgcourses,
  },
  {
    text: "من به تیم شما بابت پشتیبانی عالیتان از وبسایتتان تشکر می‌کنم. سوالات و مشکلات من به سرعت پاسخ داده می‌شوند و همیشه یک راه حل مناسب برای هر مشکل پیدا می‌کنید. این امر بسیار قابل ارزش است.",
    name: "جلال بهرامی راد",
    course: "دوره پروژه محور React و Next",
    image: imgcourses,
  },
];

export default function Comments() {
  return (
    <div className="container container-comment py-5 d-flex justify-content-between align-items-center mt-5">
      <div className="row">
        <div className="col-6 d-flex mb-5 w-100">
          <div className="d-flex justify-content-center align-items-center logo-comment mb-4">
            <CommentIcon className="icon-comments" fontSize="large" />
          </div>
          <div className="title-comment mx-4">
            <h3 className="">دیگران درمورد فیتیوب چه می‌گویند؟</h3>
            <p className="">این‌ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد فیتیوب دارند.</p>
          </div>
        </div>
      </div>
        <div className="col-6">
          <div className="flex justify-center items-center">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              // pagination={{ clickable: true }}
              navigation
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper-3d swiper-horizontal swiper-rtl"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="box-comments d-flex flex-column testimonial-card border border-gray-300 rounded-2xl shadow-lg rounded-3">
                    <div className="box-comment-texts text-center mb-4 p-4">
                      {testimonial.text}
                    </div>
                    <div className="d-flex flex-column align-items-center items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src={testimonial.image} className="img-comment-customer w-full h-full object-cover rounded-circle" alt={testimonial.name} />
                      </div>
                      <div className="d-flex flex-column items-start space-y-1">
                        <span className="customer-name font-bold  text-center">{testimonial.name}</span>
                        <span className="customer-course font-semibold text-center">{testimonial.course}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
  );
}
