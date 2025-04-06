import React from "react";
import "./CoursesPanle.css";
import SideBarPanel from "../SideBarPanel/SideBarPanel";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import CourseBox from "../CourseBox/CourseBox";
export default function CoursesPanle() {
  return (
    <>
      <div className="container">
        <div className="row">
          <SideBarPanel />
          <div className="col-9">
          <div className="title-main d-flex ">
            <div className="icon-title-panle">
              <VideoLibraryOutlinedIcon />
            </div>
            <h4 className="me-3 ">ویدیو های من</h4>
          </div>
          <div className="row">
            <div className="col-4 g-3">
              <CourseBox />
            </div>
            <div className="col-4 g-3">
              <CourseBox />
            </div>
            <div className="col-4 g-3">
              <CourseBox />
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
