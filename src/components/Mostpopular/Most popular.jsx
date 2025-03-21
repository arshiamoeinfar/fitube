  import React from "react";
  import Background from "./../Bacground/Backround";
  import "./Mostpopular.css";
  import header from "./../../assets/images/wp2_1-1-768x432.webp";
  import { Rating } from "@mui/material";
  import StarIcon from "@mui/icons-material/Star";

  const MostPopular = () => {
    const [value, setValue] = React.useState(5);

    return (
      <div  className="container">
        <div id="container-mostpopular" >
          <div className="row justify-content-center">
            <div className="col-12 p-4 text-end">
              <h1 id="title" className="text-white">محبوب‌ترین ویدیوها</h1>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="col-md-6 col-lg-3 d-flex">
                <div className="card bg-dark text-white shadow-sm w-100 rounded-4">
                  <img
                    src={header}
                    className="card-img-top rounded-4"
                    loading="lazy"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 id="text-category" className="card-title">آموزش جاوا اسکریپت با ترجمه اختصاصی</h5>
                    <p className="card-text my-3">
                      وردپرس پرکاربردترین و محبوب‌ترین سیستم مدیریت محتوا است که در
                      دنیای طراحی سایت...
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span id="text-category" className="btn bg-warning text-white">امتیاز :</span>
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span id="text-category" className="btn bg-danger text-white ">مترجم :</span>
                      <span id="text-category" className="btn text-white bg-primary">حسین حسینی</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default MostPopular;
