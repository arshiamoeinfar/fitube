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
              <div className="container-box-courses p-2">
                <div className="img-courses">
                  <img className="w-100 rounded-4" src={imgcourses} alt="" />
                </div>
                <div className="info-box-courses p-2">
                  <h3>دوره جامع آموزش ریکت</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز
                  </p>
                  <div className="date-score-season">
                    <div className="row w-100 d-flex justify-content-start align-items-center">
                      <div className="col-4">
                        <span>
                          <QueryBuilderIcon className="mx-1" />
                          25 ساعت
                        </span>
                      </div>
                      <div className="col-4">
                        <span>
                          <QueryBuilderIcon className="mx-1"/>5 فصل
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="teacher-cousers d-flex w-100 mt-2">
                    <div className="img-course">
                      <img className="rounded-circle" src={caracter} alt="" />
                    </div>
                    <div className="info-teacher-course d-flex justify-content-between align-items-center">
                      <div className="info-teacher">
                        <h3>مدرس دوره :</h3>
                        <p>ارشیا معین فر</p>
                      </div>
                      <span>50000</span>
                    </div>
                  </div>
                    <button className="w-100 btn-courses">مشاهده دوره <NorthWestIcon/></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-box-courses p-2">
                <div className="img-courses">
                  <img className="w-100 rounded-4" src={imgcourses} alt="" />
                </div>
                <div className="info-box-courses p-2">
                  <h3>دوره جامع آموزش ریکت</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز
                  </p>
                  <div className="date-score-season">
                    <div className="row w-100 d-flex justify-content-start align-items-center">
                      <div className="col-4">
                        <span>
                          <QueryBuilderIcon className="mx-1" />
                          25 ساعت
                        </span>
                      </div>
                      <div className="col-4">
                        <span>
                          <QueryBuilderIcon className="mx-1"/>5 فصل
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="teacher-cousers d-flex w-100 mt-2">
                    <div className="img-course">
                      <img className="rounded-circle" src={caracter} alt="" />
                    </div>
                    <div className="info-teacher-course d-flex justify-content-between align-items-center">
                      <div className="info-teacher">
                        <h3>مدرس دوره :</h3>
                        <p>ارشیا معین فر</p>
                      </div>
                      <span>50000</span>
                    </div>
                  </div>
                    <button className="w-100 btn-courses">مشاهده دوره <NorthWestIcon/></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-box-courses p-2">
                <div className="img-courses">
                  <img className="w-100 rounded-4" src={imgcourses} alt="" />
                </div>
                <div className="info-box-courses p-2">
                  <h3>دوره جامع آموزش ریکت</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز
                  </p>
                  <div className="date-score-season">
                    <div className="row w-100 d-flex justify-content-start align-items-center">
                      <div className="col-4">
                        <span>
                          <QueryBuilderIcon className="mx-1" />
                          25 ساعت
                        </span>
                      </div>
                      <div className="col-4">
                        <span>
                          <QueryBuilderIcon className="mx-1"/>5 فصل
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="teacher-cousers d-flex w-100 mt-2">
                    <div className="img-course">
                      <img className="rounded-circle" src={caracter} alt="" />
                    </div>
                    <div className="info-teacher-course d-flex justify-content-between align-items-center">
                      <div className="info-teacher">
                        <h3>مدرس دوره :</h3>
                        <p>ارشیا معین فر</p>
                      </div>
                      <span>50000</span>
                    </div>
                  </div>
                    <button className="w-100 btn-courses">مشاهده دوره <NorthWestIcon/></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-box-courses p-2">
                <div className="img-courses">
                  <img className="w-100 rounded-4" src={imgcourses} alt="" />
                </div>
                <div className="info-box-courses p-2">
                  <h3>دوره جامع آموزش ریکت</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز
                  </p>
                  <div className="date-score-season">
                    <div className="row w-100 d-flex justify-content-start align-items-center">
                      <div className="col-4">
                        <span>
                          <QueryBuilderIcon className="mx-1" />
                          25 ساعت
                        </span>
                      </div>
                      <div className="col-4">
                        <span>
                          <QueryBuilderIcon className="mx-1"/>5 فصل
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="teacher-cousers d-flex w-100 mt-2">
                    <div className="img-course">
                      <img className="rounded-circle" src={caracter} alt="" />
                    </div>
                    <div className="info-teacher-course d-flex justify-content-between align-items-center">
                      <div className="info-teacher">
                        <h3>مدرس دوره :</h3>
                        <p>ارشیا معین فر</p>
                      </div>
                      <span>50000</span>
                    </div>
                  </div>
                    <button className="w-100 btn-courses">مشاهده دوره <NorthWestIcon/></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container-box-courses p-2">
                <div className="img-courses">
                  <img className="w-100 rounded-4" src={imgcourses} alt="" />
                </div>
                <div className="info-box-courses p-2">
                  <h3>دوره جامع آموزش ریکت</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز
                  </p>
                  <div className="date-score-season">
                    <div className="row w-100 d-flex justify-content-start align-items-center">
                      <div className="col-4">
                        <span>
                          <QueryBuilderIcon className="mx-1" />
                          25 ساعت
                        </span>
                      </div>
                      <div className="col-4">
                        <span>
                          <QueryBuilderIcon className="mx-1"/>5 فصل
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="teacher-cousers d-flex w-100 mt-2">
                    <div className="img-course">
                      <img className="rounded-circle" src={caracter} alt="" />
                    </div>
                    <div className="info-teacher-course d-flex justify-content-between align-items-center">
                      <div className="info-teacher">
                        <h3>مدرس دوره :</h3>
                        <p>ارشیا معین فر</p>
                      </div>
                      <span>50000</span>
                    </div>
                  </div>
                    <button className="w-100 btn-courses">مشاهده دوره <NorthWestIcon/></button>
                </div>
              </div>
            </SwiperSlide>
         
          </div>
        </Swiper>
      </div>
    </div>
  );
};
