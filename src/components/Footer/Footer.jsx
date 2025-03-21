// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"
const Footer = () => {
    return (
        <footer id="footer" className="bg-dark text-white mt-5" dir="rtl">
            <Container className="py-5">
                <Row>
                    <Col md={3}>
                        <h5 className='footer-title'>درباره ما</h5>
                        <p id='footer-about-us'>ما شرکتی هستیم که به ارائه بهترین خدمات به مشتریان خود متعهد هستیم.</p>
                    </Col>
                    <Col md={3}>
                        <h5 className='footer-title'>لینک‌های سریع</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className=" footer-text">خانه</a></li>
                            <li><a href="#services" className=" footer-text">خدمات</a></li>
                            <li><a href="#about" className=" footer-text">درباره</a></li>
                            <li><a href="#contact" className=" footer-text">تماس</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 className='footer-title'>تماس با ما</h5>
                        <p className='footer-text'>ایمیل: info@example.com</p>
                        <p className='footer-text'>تلفن: (123) 456-7890</p>
                    </Col>
                    <Col md={3}>
                        <h5 className='footer-title'>ما را دنبال کنید</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" footer-text">فیسبوک</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" footer-text">توئیتر</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=" footer-text">اینستاگرام</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="bg-dark text-center py-3">
                <p id='footer-copy-right' className="mb-0">&copy; 2025 کلیه حقوق مادی و معنوی سایت برای فیتیوب محفوظ است.</p>
            </div>
        </footer>
    );
};

export default Footer;