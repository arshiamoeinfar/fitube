// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import logo from "./../../assets/icons/Logo.png";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <footer id="footer" className=" container text-white" dir="rtl">
      <Container className="border-top border-bottom border-dark custom-dashed p-3">
        <Row className="align-items-center mb-4">
          <Col md={4} className="">
            <img className="logo-footer" src={logo} alt="" />
          </Col>
          <Col md={4} className="">
            <div className="d-flex align-items-center contact-us">
              <div className="icon-contact">
                <LocalPhoneOutlinedIcon
                  style={{ color: "#666" }}
                  fontSize="medium"
                />
              </div>
              <div className="contact-text">
                <h5>تماس با ما</h5>
                <p>تلفن: (123) 456-7890</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="">
            <div className="d-flex align-items-center contact-us">
              <div className="icon-contact">
                <AccessTimeOutlinedIcon
                  style={{ color: "#666" }}
                  fontSize="medium"
                />
              </div>
              <div className=" contact-text">
                <h5>ساعات کار</h5>
                <p>09:00 - 17:00</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-between">
          <Col lg={4} md={5} className="contact-us-section px-4 py-2 rounded-4">
            <p className="contact-us-text">
              <span className="d-flex align-items-center">
                <div className="icon-contact-us">
                  <PeopleOutlineOutlinedIcon
                    style={{ color: "#666" }}
                    fontSize="medium"
                  />
                </div>
                <h4 className="contact-us-title">درباره فیتیوب :</h4>
              </span>
              <br /> فیتیوب یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در
              سطح ایران است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین
              مقالات و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد.
              تبدیل کردن برنامه نویسان ایرانی به بهترین برنامه نویسان جهان هدف
              ماست.{" "}
            </p>
          </Col>
          <Col lg={2} md={3} className="links-help ">
            <span className="d-flex align-items-center">
              <InsertLinkOutlinedIcon
                style={{ color: "#666" }}
                fontSize="large"
                className="mx-3"
              />
              <h4 className="contact-us-title">لینک های مفید</h4>
            </span>
            <ul className="list-unstyled px-5">
              <li>
                <a href="#home" className=" footer-text">
                  قوانین و مقررات
                </a>
              </li>
              <li>
                <a href="#services" className=" footer-text">
                  مدرسان
                </a>
              </li>
              <li>
                <a href="#about" className=" footer-text">
                  درباره فیتویب
                </a>
              </li>
              <li>
                <a href="#contact" className=" footer-text">
                  ارتباط با ما
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={5} md={4} className="">
            <h5 className="footer-title">
              <NewspaperIcon
                style={{ color: "#666" }}
                fontSize="large"
                className="mx-3"
              />
              خبرنامه
            </h5>
            <p className="footer-text no-hover-text">
              برای اطلاع از جدیدترین اخبار و جشنوراه‌های تخفیفی نابغه ایمیل خود
              را وارد کنید.
            </p>
            <div className="contact-us-email d-flex">
            <div className="contact-email">
              <EmailIcon />
              <input type="text" placeholder="آدرس ایمیل" />
            </div>
            <button className="btn-contact-us-email">ثبت ایمیل</button>
            </div>
            <ul className="list-unstyled d-flex mt-2">
              <a className="icon-contact">
                <InstagramIcon style={{color: "#666"}}/>
              </a>
              <a  className="icon-contact">
              <TelegramIcon style={{color: "#666"}}/>
              </a>
              <a className="icon-contact">
              <LinkedInIcon style={{color: "#666"}}/>
              </a>
            </ul>
          </Col>
          <Col md={4}>
           
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        <p id="footer-copy-right" className="mb-0">
          &copy; 2025 کلیه حقوق مادی و معنوی سایت برای فیتیوب محفوظ است.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
