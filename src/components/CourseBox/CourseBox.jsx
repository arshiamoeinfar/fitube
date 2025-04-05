import React from "react";
import "./CourseBox.css";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import imgcourses from "./../../assets/images/wp2_1-1-768x432.webp";
import caracter from "./../../assets/images/01.jpeg";
import NorthWestIcon from "@mui/icons-material/NorthWest";
export default function CourseBox() {
  return (
    <div className="container-box-courses p-2">
      <div className="img-courses">
        <img className="w-100 rounded-4" src={imgcourses} alt="" />
      </div>
      <div className="info-box-courses p-2">
        <h3>دوره جامع آموزش ریکت</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
        <div className="date-score-season">
          <div className="row w-100 d-flex justify-content-start align-items-start">
            <div className="col-4 d-flex justify-content-center align-items-center flex-wrap">
              <QueryBuilderIcon className="mx-1" style={{ color: "#666" }} />
              <span>25 ساعت</span>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center flex-wrap">
              <QueryBuilderIcon className="mx-1" style={{ color: "#666" }} />
              <span>5 فصل</span>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center flex-wrap">
              <QueryBuilderIcon className="mx-1" style={{ color: "#666" }} />
              <span>5 فصل</span>
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
        <button className="w-100 btn-courses">
          مشاهده دوره <NorthWestIcon />
        </button>
      </div>
    </div>
  );
}
