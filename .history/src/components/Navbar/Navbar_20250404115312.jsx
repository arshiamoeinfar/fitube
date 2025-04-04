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
const Header = () => {
  const [isShowSerachBox, setIsShowSerachBox] = useState(false);

  return (
    <Navbar id="navbar" className="container-fluid px-3 mx-auto ">
      {isShowSerachBox ? (
        <div className="container search-box w-100 d-flex justify-content-between align-items-center icon-close-searchBox">
          <div className="contact-email">
            <input type="text" placeholder="نام دوزه یا مقاله را جستجو نمایید..." />
          </div>
          <div className="icon-close-searchBox">
            <CloseIcon style={{ color: "#666" }} fontSize="medium" />
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
                  <SearchIcon className=" " />
                </div>
                <div className="_icon_Navbar">
                  <ShoppingCartOutlinedIcon className=" " />
                  <span className="number_product reletive">
                    <span class="ping-effect"></span>
                    <span class="relative inline-flex h-5 w-5 bg-blue-500 rounded-full">
                      2
                    </span>
                  </span>
                </div>
                <div className="_icon_Navbar">
                  <PersonOutlineOutlinedIcon className=" " />
                </div>
                <div className="userLoginInfo">
                  <h3>ارشیا معین فر</h3>
                  <p>خوش آمدید</p>
                </div>
                <div className="userLoginArrow">
                  <KeyboardArrowDownIcon className="" />
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
