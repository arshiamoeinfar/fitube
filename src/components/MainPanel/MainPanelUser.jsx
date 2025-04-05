import React from "react";
import imgUser from "./../../assets/images/01.jpeg";
import "./MainPanelUser.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CommentIcon from "@mui/icons-material/Comment";
import BoxCourses from "./../BoxCourses/BoxCourses";
//
import CourseBox from "../CourseBox/CourseBox";
export default function MainPanelUser() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-3">
          <div className="profile-user d-flex">
            <img src={imgUser} alt="" className="img-user rounded-circle" />
            <div className="profile-user-texts">
              <h4>خوش آمدید</h4>
              <h5>ارشیا معین فر</h5>
            </div>
          </div>
          <div className="box-list-panel mt-3 p-3">
            <div className=" d-flex mb-4 ">
              <Link to="" className="bac-list-panel w-100 active">
                <HomeOutlinedIcon className="icon-list-box-panel" />
                <span className="me-2 ">پیشخوان</span>
              </Link>
            </div>
            <div className=" d-flex mb-4">
              <Link to="" className="bac-list-panel w-100">
                <VideoLibraryOutlinedIcon className="icon-list-box-panel" />
                <span className="me-2">دوره ها</span>
              </Link>
            </div>
            <div className=" d-flex mb-4">
              <Link to="" className="bac-list-panel w-100">
                <ShoppingBasketOutlinedIcon className="icon-list-box-panel" />
                <span className="me-2">تراکنش ها و کیف پول</span>
              </Link>
            </div>
            <div className=" d-flex mb-4">
              <Link to="" className="bac-list-panel w-100">
                <QuestionAnswerOutlinedIcon className="icon-list-box-panel" />
                <span className="me-2">دیدگاه ها و پرسش ها</span>
              </Link>
            </div>
            <div className=" d-flex mb-4">
              <Link to="" className="bac-list-panel w-100">
                <ModeEditOutlinedIcon className="icon-list-box-panel" />
                <span className="me-2">ویرایش پروفایل</span>
              </Link>
            </div>
            <div className=" d-flex mb-4">
              <Link to="" className="bac-list-panel w-100">
                <LogoutOutlinedIcon className="icon-list-box-panel" />
                <span className="me-2">خروج از حساب کاربری</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="detail-top-mainPanel">
            <div className="detail-top-mainPanel-texts d-flex justify-content-around align-items-center">
              <div className="detail-box-panel d-flex align-items-center">
                <div className="icon-detail-box-panel">
                  <LocalActivityIcon
                    className="icon-detail-box-panel-top-1"
                    fontSize="medium"
                  />
                </div>
                <div className="detail-panel-box-text">
                  <h5>باقیمانده اشتراک</h5>
                  <p>عضو ویژه نیستید</p>
                </div>
              </div>
              <div className="detail-box-panel d-flex align-items-center">
                <div className="icon-detail-box-panel">
                  <VideoLibraryIcon
                    className="icon-detail-box-panel-top-2"
                    fontSize="medium"
                  />
                </div>
                <div className="detail-panel-box-text">
                  <h5>درحال یادگیری</h5>
                  <p>7 دوره</p>
                </div>
              </div>
              <div className="detail-box-panel d-flex align-items-center">
                <div className="icon-detail-box-panel">
                  <LocalAtmOutlinedIcon
                    className="icon-detail-box-panel-top-3"
                    fontSize="medium"
                  />
                </div>
                <div className="detail-panel-box-text">
                  <h5>موجودی کیف پول</h5>
                  <p>1000000 تومان</p>
                </div>
              </div>
              <div className="detail-box-panel d-flex align-items-center">
                <div className="icon-detail-box-panel">
                  <CommentIcon
                    className="icon-detail-box-panel-top-4"
                    fontSize="medium"
                  />
                </div>
                <div className="detail-panel-box-text">
                  <h5>پرسش و پاسخ های من</h5>
                  <p>15 پرسش</p>
                </div>
              </div>
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
    </div>
  );
}
