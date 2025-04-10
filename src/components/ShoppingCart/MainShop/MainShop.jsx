import React from "react";
import MostPopular from "../../Mostpopular/Most popular";
import SideCart from "../SideCart/SideCart";
import imgCourse from "./../../../assets/images/wp2_1-1-768x432.webp";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./MainShop.css";
export default function MainShop() {
  return (
    <div className="container-shoppingCart container">
      <div className="row">
        <div className="col-8">
          <MostPopular
            titleName="سبد خرید من"
            text="2 دوره به سبد خرید اضافه کرده اید"
          />
          <div className="box-shop-carts">
            <div className="box-shop d-flex ">
              <div className="d-flex">
                <img
                  className="img-box-shop rounded-3"
                  src={imgCourse}
                  alt=""
                />
                <div className="info-shop-cart">
                  <div className="title-course-shop">
                    <h4>دوره طراحی سایت</h4>
                  </div>
                  <div className="info-teacher">
                    <p>ارشیا معین فر</p>
                  </div>
                </div>
              </div>
              <div className="pric-box-shop">
                <span>200000</span>
              </div>
              <div className="remove-box-shop">
                <DeleteOutlineIcon />
              </div>
            </div>
            <div className="box-shop d-flex ">
              <div className="d-flex">
                <img
                  className="img-box-shop rounded-3"
                  src={imgCourse}
                  alt=""
                />
                <div className="info-shop-cart">
                  <div className="title-course-shop">
                    <h4>دوره طراحی سایت</h4>
                  </div>
                  <div className="info-teacher">
                    <p>ارشیا معین فر</p>
                  </div>
                </div>
              </div>
              <div className="pric-box-shop">
                <span>200000</span>
              </div>
              <div className="remove-box-shop">
                <DeleteOutlineIcon />
              </div>
            </div>
            <div className="box-shop d-flex ">
              <div className="d-flex">
                <img
                  className="img-box-shop rounded-3"
                  src={imgCourse}
                  alt=""
                />
                <div className="info-shop-cart">
                  <div className="title-course-shop">
                    <h4>دوره طراحی سایت</h4>
                  </div>
                  <div className="info-teacher">
                    <p>ارشیا معین فر</p>
                  </div>
                </div>
              </div>
              <div className="pric-box-shop">
                <span>200000</span>
              </div>
              <div className="remove-box-shop">
                <DeleteOutlineIcon />
              </div>
            </div>
            <div className="box-shop d-flex ">
              <div className="d-flex">
                <img
                  className="img-box-shop rounded-3"
                  src={imgCourse}
                  alt=""
                />
                <div className="info-shop-cart">
                  <div className="title-course-shop">
                    <h4>دوره طراحی سایت</h4>
                  </div>
                  <div className="info-teacher">
                    <p>ارشیا معین فر</p>
                  </div>
                </div>
              </div>
              <div className="pric-box-shop">
                <span>200000</span>
              </div>
              <div className="remove-box-shop">
                <DeleteOutlineIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <SideCart />
        </div>
      </div>
    </div>
  );
}
