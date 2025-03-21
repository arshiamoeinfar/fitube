import React from "react";
import "./BuyPremium.css";
const BuyPremium = () => {
  return (
    <div>
      <div id="container" className="container">
        <div
          id="container_card_buy"
          className="container_card_buy d-flex justify-content-between align-items-center rounded-3 p-5"
        >
          <div className="card_buy w-75 text-white">
            <h1 id="text_title_card_buy">خرید اشتراک ویژه</h1>
            <p id="text_card_buy" className="w-100">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنیکهای کاربردی
              مورد استفاده قرار گیرد.
            </p>
          </div>
          <button id="button_card_buy" className="btn btn-danger rounded-3">خرید اشتراک ویژه</button>
        </div>
      </div>
    </div>
  );
};

export default BuyPremium;
