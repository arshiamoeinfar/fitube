import React from "react";
import "./DetailCourse.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SideCart from "../../components/ShoppingCart/SideCart/SideCart";
import imgCourse from "./../../assets/images/wp2_1-1-768x432.webp";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import NavbarCourse from "../../components/NavbarCourse/NavbarCourse";
export default function DetailCourse() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-8">
            <div className="details-course p-3 rounded-4">
              <div className="title-img-course">
                <img className=" w-100" src={imgCourse} alt="" />
                <div className="detail-course px-4 py-2">
                  <li className="text-success">تکمیل شده</li>
                  <h4>دوره جامع برنامه نویسی</h4>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز
                  </p>
                </div>
              </div>
              <div className="boxs-info-course d-flex justify-content-between mt-5">
                <div className="box-info  rounded-3  d-flex justify-content-center align-items-center flex-column">
                  <div className="icon-contact m-0">
                    <PeopleOutlineOutlinedIcon
                      style={{ color: "#666" }}
                      fontSize="medium"
                    />
                  </div>
                  <span>شرکت کنندگان</span>
                  <p>133 دانشجو</p>
                </div>
                <div className="box-info  rounded-3  d-flex justify-content-center align-items-center flex-column">
                  <div className="icon-contact m-0">
                    <PeopleOutlineOutlinedIcon
                      style={{ color: "#666" }}
                      fontSize="medium"
                    />
                  </div>
                  <span>شرکت کنندگان</span>
                  <p>133 دانشجو</p>
                </div>
                <div className="box-info  rounded-3  d-flex justify-content-center align-items-center flex-column">
                  <div className="icon-contact m-0">
                    <PeopleOutlineOutlinedIcon
                      style={{ color: "#666" }}
                      fontSize="medium"
                    />
                  </div>
                  <span>شرکت کنندگان</span>
                  <p>133 دانشجو</p>
                </div>
                <div className="box-info  rounded-3  d-flex justify-content-center align-items-center flex-column">
                  <div className="icon-contact m-0">
                    <PeopleOutlineOutlinedIcon
                      style={{ color: "#666" }}
                      fontSize="medium"
                    />
                  </div>
                  <span>شرکت کنندگان</span>
                  <p>133 دانشجو</p>
                </div>
              </div>

              <NavbarCourse />

              <div className="header-title-Course">
                <h3>معرفی دوره</h3>
              </div>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد
              </p>
              <div className="header-title-Course">
                <h3>دوره آموزشی طراحی سایت</h3>
              </div>
              <img className="rounded-3 w-100" src={imgCourse} alt="" />
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد
              </p>
            </div>
          </div>
          <div className="col-4">
            <SideCart />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
