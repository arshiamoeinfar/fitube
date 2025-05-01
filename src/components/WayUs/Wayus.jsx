import React from "react";
import "./Wayus.css";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
export default function Wayus() {
  return (
    // <div className="container-fluid p-5">
    <div id="container-way-us" className="container p-5 rounded-4 mt-5">
      <div className="title text-center ">چرا آکــــادمــــــی فیتیوب؟</div>
      <div className="row mt-5 d-felx justify-content-center align-items-center">
        <div className="col features d-flex justify-content-center flex-column align-items-center ">
          <div className="circle p-4 rounded-circle">
            <SmartDisplayOutlinedIcon
              className="circle-2"
              sx={{ fontSize: 50 }}
            />
          </div>
          <p className="text-WayUs  circle-2 text-center">
            پیشنهاد ویدیو برای ترجمه{" "}
          </p>
        </div>
        <div className="col features d-flex justify-content-around flex-column align-items-center ">
          <div className="circle p-4 rounded-circle">
            <PublicOutlinedIcon className="circle-3" sx={{ fontSize: 50 }} />
          </div>
          <p className="text-WayUs circle-3 text-center">
            با بهترین کیفیت ترجمه
          </p>
        </div>
        <div className="col features d-flex justify-content-around flex-column align-items-center mt-3">
          <div className="items__circle">
          <div className="circle p-4 rounded-circle">
            <VideoCameraFrontOutlinedIcon
              className="circle-1"
              sx={{ fontSize: 50 }}
            />
          </div>

          </div>
          <p className="text-WayUs circle-1 text-center">
            ویدیو های آموزشی از بهترین تدریس های یوتیوب
          </p>
        </div>
        <div className="col features d-flex justify-content-center flex-column align-items-center ">
          <div className="circle p-4 rounded-circle">
            <WhatshotOutlinedIcon className="circle-4" sx={{ fontSize: 50 }} />
          </div>
          <p className="text-WayUs circle-4 text-center">محتوای همیشه بروز</p>
        </div>
        <div className="col features d-flex justify-content-center flex-column align-items-center ">
          <div className="circle p-4 rounded-circle">
            <MonetizationOnOutlinedIcon
              className="circle-5"
              sx={{ fontSize: 50 }}
            />
          </div>
          <p className="text-WayUs circle-5 text-center">
            قیمت مناسب و مقرون‌به‌صرفه{" "}
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}
