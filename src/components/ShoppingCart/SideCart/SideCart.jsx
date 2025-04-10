import React from "react";
import "./SideCart.css";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DiscountIcon from "@mui/icons-material/Discount";
import NorthWestIcon from "@mui/icons-material/NorthWest";
export default function SideCart() {
  return (
    <>
      <div className="box-side-cart">
        <div className="box">
          <div className="title-box-cart">
            <h4>اطلاعات پرداخت</h4>
          </div>
          <div className="disCount-Code d-flex">
            <div className="input-disCount">
              <DiscountIcon fontSize="small" />
              <input type="text" placeholder="کد تخفیف" />
            </div>
            <div className="btn-disCount">
              <AutorenewIcon />
            </div>
          </div>
          <div className="price-courses">
            <div className="info-price d-flex justify-content-between">
              <div className="title-price">قیمت دوره :</div>
              <div className="price">
                <span>200000 تومان</span>
              </div>
            </div>
            <div className="info-price d-flex justify-content-between">
              <div className="title-price">موجودی کیف پول :</div>
              <div className="price">
                <span>200000 تومان</span>
              </div>
            </div>
            <div className="info-price d-flex justify-content-between">
              <div className="title-price">تخفیف :</div>
              <div className="price">
                <span>200000 تومان</span>
              </div>
            </div>
          </div>
          <div className="d-flex  d-flex justify-content-between">
            <div className="title-price">مبلغ قابل پرداخت :</div>
            <div className="price">
              <span>200000 تومان</span>
            </div>
          </div>
          <div className="btn-price">
            <button className="btn">
              تکمیل فرایند خرید <NorthWestIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
