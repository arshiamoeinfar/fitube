// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Category.css";
export default () => {
  return (
    <div className="container  rounded-5 p-3">
      <div className="row justify-content-center">
        <div className="col-12 p-4 text-end">
          <h1 id="title" className="text-white">
            دسته بندی ویدیوها
          </h1>
        </div>
      </div>
      <Swiper className="p-5"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        // navigation
        loop={true}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className=" d-flex justify-content-center align-items-center rounded">
          <div className="card d-flex row w-100 bg-dark">
            <div className="row g-1">
              {[...Array(4)].map((_, imgIndex) => (
                <div
                  key={imgIndex}
                  className="col-6 d-flex justify-content-center"
                >
                  <img
                    src="https://picsum.photos/100/100"
                    className="w-100 rounded"
                    alt="Movie"
                  />
                </div>
              ))}
            </div>

            <div className="card-body w-100">
              <h5 id="title-category" className="card-title text-white">ویدیوهای برنامه‌نویسی</h5>
            </div>
            <div className="card-footer">
              <button id="btn-category" className="btn btn-danger w-100">
               تماشا کردن 
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-dark d-flex justify-content-center align-items-center rounded">
          <div className="card d-flex row w-100 bg-dark">
            <div className="row g-1">
              {[...Array(4)].map((_, imgIndex) => (
                <div
                  key={imgIndex}
                  className="col-6 d-flex justify-content-center"
                >
                  <img
                    src="https://picsum.photos/100/100"
                    className="w-100 rounded"
                    alt="Movie"
                  />
                </div>
              ))}
            </div>

            <div className="card-body w-100">
              <h5 id="title-category" className="card-title text-white">ویدیوهای برنامه‌نویسی</h5>
            </div>
            <div className="card-footer">
              <button id="btn-category" className="btn btn-danger w-100">
               تماشا کردن 
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-dark d-flex justify-content-center align-items-center rounded">
          <div className="card d-flex row w-100 bg-dark">
            <div className="row g-1">
              {[...Array(4)].map((_, imgIndex) => (
                <div
                  key={imgIndex}
                  className="col-6 d-flex justify-content-center"
                >
                  <img
                    src="https://picsum.photos/100/100"
                    className="w-100 rounded"
                    alt="Movie"
                  />
                </div>
              ))}
            </div>

            <div className="card-body w-100">
              <h5 id="title-category" className="card-title text-white">ویدیوهای برنامه‌نویسی</h5>
            </div>
            <div className="card-footer">
              <button id="btn-category" className="btn btn-danger w-100">
               تماشا کردن 
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-dark d-flex justify-content-center align-items-center rounded">
          <div className="card d-flex row w-100 bg-dark">
            <div className="row g-1">
              {[...Array(4)].map((_, imgIndex) => (
                <div
                  key={imgIndex}
                  className="col-6 d-flex justify-content-center"
                >
                  <img
                    src="https://picsum.photos/100/100"
                    className="w-100 rounded"
                    alt="Movie"
                  />
                </div>
              ))}
            </div>

            <div className="card-body w-100">
              <h5 id="title-category" className="card-title text-white">ویدیوهای برنامه‌نویسی</h5>
            </div>
            <div className="card-footer">
              <button id="btn-category" className="btn btn-danger w-100">
               تماشا کردن 
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-dark d-flex justify-content-center align-items-center rounded">
          <div className="card d-flex row w-100 bg-dark">
            <div className="row g-1">
              {[...Array(4)].map((_, imgIndex) => (
                <div
                  key={imgIndex}
                  className="col-6 d-flex justify-content-center"
                >
                  <img
                    src="https://picsum.photos/100/100"
                    className="w-100 rounded"
                    alt="Movie"
                  />
                </div>
              ))}
            </div>

            <div className="card-body w-100">
              <h5 id="title-category" className="card-title text-white">ویدیوهای برنامه‌نویسی</h5>
            </div>
            <div className="card-footer">
              <button id="btn-category" className="btn btn-danger w-100">
               تماشا کردن 
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-dark d-flex justify-content-center align-items-center rounded">
          <div className="card d-flex row w-100 bg-dark">
            <div className="row g-1">
              {[...Array(4)].map((_, imgIndex) => (
                <div
                  key={imgIndex}
                  className="col-6 d-flex justify-content-center"
                >
                  <img
                    src="https://picsum.photos/100/100"
                    className="w-100 rounded"
                    alt="Movie"
                  />
                </div>
              ))}
            </div>

            <div className="card-body w-100">
              <h5 id="title-category" className="card-title text-white">ویدیوهای برنامه‌نویسی</h5>
            </div>
            <div className="card-footer">
              <button id="btn-category" className="btn btn-danger w-100">
               تماشا کردن 
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-dark d-flex justify-content-center align-items-center rounded">
          <div className="card d-flex row w-100 bg-dark">
            <div className="row g-1">
              {[...Array(4)].map((_, imgIndex) => (
                <div
                  key={imgIndex}
                  className="col-6 d-flex justify-content-center"
                >
                  <img
                    src="https://picsum.photos/100/100"
                    className="w-100 rounded"
                    alt="Movie"
                  />
                </div>
              ))}
            </div>

            <div className="card-body w-100">
              <h5 id="title-category" className="card-title text-white">ویدیوهای برنامه‌نویسی</h5>
            </div>
            <div className="card-footer">
              <button id="btn-category" className="btn btn-danger w-100">
               تماشا کردن 
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};
