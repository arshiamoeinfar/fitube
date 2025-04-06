import React from "react";

import "./MainPanelUser.css";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CommentIcon from "@mui/icons-material/Comment";
import CourseBox from "../CourseBox/CourseBox";
import SideBarPanel from "../SideBarPanel/SideBarPanel";
export default function MainPanelUser() {
  return (
    <div className="container mt-4">
      <div className="row">
            <SideBarPanel/>
        <div className="col-9">
          <div className="detail-top-mainPanel">
            <div className="detail-top-mainPanel-texts d-flex justify-content-around align-items-center">
              <div className="detail-box-panel d-flex align-items-center">
                <div className="icon-detail-box-panel">
                  <LocalActivityIcon
                    className="icon-detail-box-panel-top-1"
                    fontSize="medium"
                  />
                </div>
                <div className="detail-panel-box-text">
                  <h5>باقیمانده اشتراک</h5>
                  <p>عضو ویژه نیستید</p>
                </div>
              </div>
              <div className="detail-box-panel d-flex align-items-center">
                <div className="icon-detail-box-panel">
                  <VideoLibraryIcon
                    className="icon-detail-box-panel-top-2"
                    fontSize="medium"
                  />
                </div>
                <div className="detail-panel-box-text">
                  <h5>درحال یادگیری</h5>
                  <p>7 دوره</p>
                </div>
              </div>
              <div className="detail-box-panel d-flex align-items-center">
                <div className="icon-detail-box-panel">
                  <LocalAtmOutlinedIcon
                    className="icon-detail-box-panel-top-3"
                    fontSize="medium"
                  />
                </div>
                <div className="detail-panel-box-text">
                  <h5>موجودی کیف پول</h5>
                  <p>1000000 تومان</p>
                </div>
              </div>
              <div className="detail-box-panel d-flex align-items-center">
                <div className="icon-detail-box-panel">
                  <CommentIcon
                    className="icon-detail-box-panel-top-4"
                    fontSize="medium"
                  />
                </div>
                <div className="detail-panel-box-text">
                  <h5>پرسش و پاسخ های من</h5>
                  <p>15 پرسش</p>
                </div>
              </div>
            </div>
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
  );
}
