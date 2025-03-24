import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";
const VideoPlayer = ({ url, coverImage }) => {
  return (
    <div className="video-container mt-5">
      <ReactPlayer
        url={url} // آدرس ویدیو (می‌تواند URL خارجی یا فایل محلی باشد)
        playing={false} // کنترل پخش
        controls={true} // نمایش کنترل‌های پیش‌فرض
        light={coverImage} // استفاده از تصویر کاور
        // width="100%" // عرض ویدیو
        // height="auto" // ارتفاع ویدیو
      />
    </div>
  );
};

export default VideoPlayer;
