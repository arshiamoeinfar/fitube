import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import MostPopular from "../../components/Mostpopular/Most popular";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import "./CoursesCategory.css"
import CourseBox from "./../../components/CourseBox/CourseBox";
export default function CoursesCategory() {
  const [age, setAge] = useState("مرتب کنید");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Navbar />
      <MostPopular
        titleName="فرانت اند - FrontEnd "
        text="دوره ببین، تمرین کن، برنامه نویس شو"
        icon={<AppsIcon style={{ color: "white" }} />}
      />
      <div className="container d-flex justify-content-between align-items-start">
        <div className="col-3">
          <div className="courses__filter__ d-flex  justify-content-between mt-3">
            <span className="text me-2">درحال برگزاری</span>
            <div class="form-check form-switch mx-2">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
              />
            </div>
          </div>
          <div className="storing__category__article d-flex align-items-center mt-3">
            <div className="storing__box w-100">
              <div className="selection__title d-flex align-items-start justify-content-between">
                <h5 className="m-0">انتخاب کنید</h5>
              </div>
              <ExpandMoreIcon />
              {/* active class */}
              <ul className="selection__list d-flex  flex-column justify-content-start active">
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      class="form-check-input mx-2"
                      type="checkbox"
                      id="checkboxNoLabel"
                      value=""
                      aria-label="..."
                    />
                  </div>
                  <li className="selection__item">بیشترین بازدید</li>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      class="form-check-input mx-2"
                      type="checkbox"
                      id="checkboxNoLabel"
                      value=""
                      aria-label="..."
                    />
                  </div>
                  <li className="selection__item">رایگان</li>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      class="form-check-input mx-2"
                      type="checkbox"
                      id="checkboxNoLabel"
                      value=""
                      aria-label="..."
                    />
                  </div>
                  <li className="selection__item">اعضای ویژه</li>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <input
                      class="form-check-input mx-2"
                      type="checkbox"
                      id="checkboxNoLabel"
                      value=""
                      aria-label="..."
                    />
                  </div>
                  <li className="selection__item">گرانترین</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-9 mx-4">
        <div className="storing__category__article d-flex align-items-center">
            <div className="storing__box__text">
              <TuneOutlinedIcon className="" />
              <h5 className="mx-1">مرتب سازی :</h5>
            </div>
            <div className="storing__box">
              <div className="selection__title d-flex align-items-start justify-content-between">
                <h5 className="m-0">انتخاب کنید</h5>
              </div>
              <ExpandMoreIcon />
              {/* active class */}
              <ul className="selection__list d-flex  flex-column justify-content-start">
                <li className="selection__item">بیشترین بازدید</li>
                <li className="selection__item">محبوب ترین</li>
                <li className="selection__item">جدید ترین ها</li>
                <li className="selection__item">بیشترین بازدید</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-4 g-3">
              <CourseBox />
            </div>
            <div className="col-4 g-3">
              <CourseBox />
            </div>
            <div className="col-4 g-3">
              <CourseBox />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
