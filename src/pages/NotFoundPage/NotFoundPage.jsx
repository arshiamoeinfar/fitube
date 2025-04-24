import React from "react";
import "./NotFoundPage.css"
import Footer from "../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import img404 from "./../../assets/images/404 (2).png";
export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <div className="image-not-found">
          <img src={img404} alt="" />
        </div>
        <div className="text-not-found">
          <h4 className="text-center">چنین صفحه ای پیدا نشد</h4>
          <p>با عرض پوزش از شما، چنین صفحه ای در سایت وجود ندارد یا صفحه از سایت پاک شده است.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
