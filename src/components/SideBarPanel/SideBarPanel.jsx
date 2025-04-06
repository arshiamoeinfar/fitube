import React from 'react'
import "./SideBarPanel.css"
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import imgUser from "./../../assets/images/01.jpeg";
export default function SideBarPanel() {
  return (
    <div className="col-3 mt-4">
    <div className="profile-user d-flex">
      <img src={imgUser} alt="" className="img-user rounded-circle" />
      <div className="profile-user-texts">
        <h4>خوش آمدید</h4>
        <h5>ارشیا معین فر</h5>
      </div>
    </div>
    <div className="box-list-panel mt-3 p-3">
      <div className=" d-flex mb-4 ">
        <Link to="/paneluser/my-account" className="bac-list-panel w-100 active">
          <HomeOutlinedIcon className="icon-list-box-panel" />
          <span className="me-2 ">پیشخوان</span>
        </Link>
      </div>
      <div className=" d-flex mb-4">
        <Link to="/paneluser/course" className="bac-list-panel w-100">
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
  )
}
