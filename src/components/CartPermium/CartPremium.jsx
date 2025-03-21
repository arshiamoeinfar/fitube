import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YoutubeIcon from "@mui/icons-material/YouTube";
import "./CartPremium.css";

const CartPremium = () => {
  return (
    <div id="container_card" className="container mt-5 rounded-3">
      <div className="container_card   p-5">
        <div className="texts_card_premium d-flex justify-content-between align-items-center text-center">
          <h1 id="text_card_premium" className="text-white">
            مارا در شبکه های اجتماعی دنبال کنید
          </h1>
          <div className="icons_card_premium d-flex justify-content-around align-items-center w-50">
            <InstagramIcon
              className="size-50 text-white  "
              sx={{ fontSize: 60 }}
              cursor="pointer"
            />
            <TelegramIcon
              className="size-50 text-white "
              sx={{ fontSize: 60 }}
              cursor="pointer"
            />
            <FacebookIcon
              className="size-50 text-white "
              sx={{ fontSize: 60 }}
              cursor="pointer"
            />
            <TwitterIcon
              className="size-50 text-white "
              sx={{ fontSize: 60 }}
              cursor="pointer"
            />
            <YoutubeIcon
              className="size-50 text-white "
              sx={{ fontSize: 60 }}
              cursor="pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPremium;
