import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import logo from "./../../assets/icons/Logo.png";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DarkMode from "../DarkMode/DarkMode";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Header = () => {
  const [isShowSerachBox, setIsShowSerachBox] = useState(false);
  const [isShowPanelBox, setIsShowPanelBox] = useState(false);

  return (
    <Navbar id="navbar" className="container-fluid px-3 mx-auto ">
      {isShowSerachBox ? (
        <div className="container  p-0 search-box w-100 d-flex justify-content-between align-items-center">
          <div className="contact-email">
            <input
              type="text"
              placeholder="نام دوزه یا مقاله را جستجو نمایید..."
              className="w-100"
            />
          </div>
          <div
            className="icon-close-searchBox"
            onClick={() => setIsShowSerachBox(false)}
          >
            <CloseIcon fontSize="medium" />
          </div>
        </div>
      ) : (
        <div
          id="navbar-container"
          className=" d-flex justify-content-between align-items-center mx-auto"
        >
          <div className="row d-flex justify-content-between align-items-center w-100">
            <div className="col-8 d-flex align-items-center justify-content-start">
              <div className="logo">
                <Link to="/">
                  <img className="logo-navbar" src={logo} alt="logo" />
                </Link>
              </div>
              <div className="menus-navbar">
                <Nav
                  id="navbar-menus"
                  className=" d-flex align-items-center justify-content-start mx-3"
                >
                  <div className="menu  d-flex justify-contant-end align-items-end ">
                    <li
                      className=" mx-3 text-decoration-none nav_link"
                      to="#home"
                    >
                      دسته بندی آموزشها
                      <KeyboardArrowDownIcon />
                      <div className="subMenu">
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                      </div>
                    </li>
                  </div>
                  <div className="menu  d-flex justify-contant-end align-items-end ">
                    <li
                      className=" mx-3 text-decoration-none nav_link"
                      to="#home"
                    >
                      مقالات آموزشی
                      <KeyboardArrowDownIcon />
                      <div className="subMenu">
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                        <li>
                          برنامه نویسی
                          <KeyboardArrowLeftIcon />
                        </li>
                      </div>
                    </li>
                  </div>
                  <li>
                    <Link className="nav_link text-decoration-none" to="/about">
                      درباره ما
                    </Link>
                  </li>
                </Nav>
              </div>
            </div>
            <div className="col-4">
              <div className="utility-bar d-flex justify-content-between align-items-center">
                {/* <img src={moon} alt="" /> */}

                <div className="_icon_Navbar">
                  <DarkMode />
                  {/* <WbSunnyIcon className="" /> */}
                </div>
                <div
                  className="_icon_Navbar"
                  onClick={() => setIsShowSerachBox(true)}
                >
                  <SearchIcon />
                </div>
                <Link  to="/cart" className="_icon_Navbar">
                  <ShoppingCartOutlinedIcon />
                  <span className="number_product reletive">
                    <span class="ping-effect"></span>
                    <span class="relative inline-flex h-5 w-5 bg-blue-500 rounded-full">
                      2
                    </span>
                  </span>
                </Link>

                <div
                  className="d-flex"
                  onClick={() => setIsShowPanelBox(!isShowPanelBox)}
                >
                  <div className="menu">
                    <Link
                      className=" mx-3 text-decoration-none nav_link d-flex"
                      to="/paneluser/my-account"
                    >
                      <div className="_icon_Navbar mx-2">
                        <PersonOutlineOutlinedIcon className=" " />
                      </div>
                      <div className="userLoginInfo">
                        <h3>ارشیا معین فر</h3>
                        <p>خوش آمدید</p>
                      </div>
                      <div className="userLoginArrow me-2">
                        <KeyboardArrowDownIcon className="" />
                      </div>
                      <div className="subMenu-panelBox">
                        <Link to="/paneluser/my-account" className="subMenu-panelBox-link">
                          <HomeOutlinedIcon/>
                          <span className="me-2">پیشخوان</span>
                          
                        </Link>
                        <Link className="subMenu-panelBox-link"
                        to="/paneluser/course"
                        >
                          <VideoLibraryOutlinedIcon />
                          <span className="me-2">دوره ها</span>
                          
                        </Link >
                        <Link to="/paneluser/edit-profile" className="subMenu-panelBox-link">
                        <AccountCircleOutlinedIcon />
                        <span className="me-2">جزئیات حساب کاربری</span>
                          
                        </Link >
                        <Link to="/paneluser/comment" className="subMenu-panelBox-link">
                          <QuestionAnswerOutlinedIcon />
                          <span className="me-2">پرسش و دیدگاه ها</span>
                          
                        </Link>
                        <Link className="subMenu-panelBox-link">
                          <LogoutOutlinedIcon />
                          <span className="me-2">خروج از حساب کاربری</span>
                          
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
