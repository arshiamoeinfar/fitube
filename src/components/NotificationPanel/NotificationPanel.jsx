import React from "react";
import SideBarPanel from "../SideBarPanel/SideBarPanel";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import "./NotificationPanel.css";
export default function NotificationPanel() {
  return (
    <div className="container">
      <div className="row">
        <SideBarPanel />
        <div className="col-9">
          <div className="title-main d-flex ">
            <div className="icon-title-panle">
              <NotificationsActiveIcon />
            </div>
            <h4 className="me-3 ">اعلانات من</h4>
          </div>
          <div className="box-notif-panel mt-4 p-3 d-flex align-items-center">
            <div className="icon-notif-panel">
              <NewReleasesIcon fontSize="medium"/>
            </div>
            <div className="detail-notif-panel">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5>ورود به سیستم</h5>
              </div>
              <p className="text-notification">
                این یک متن نمونه است که به عنوان محتوای اعلان استفاده می‌شود.
              </p>
              <span>4 روز پیش</span>
            </div>
          </div>
          <div className="box-notif-panel mt-4 p-3 d-flex align-items-center">
            <div className="icon-notif-panel">
              <NewReleasesIcon fontSize="medium"/>
            </div>
            <div className="detail-notif-panel">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5>ورود به سیستم</h5>
              </div>
              <p className="text-notification">
                این یک متن نمونه است که به عنوان محتوای اعلان استفاده می‌شود.
              </p>
              <span>4 روز پیش</span>
            </div>
          </div>
          <div className="box-notif-panel mt-4 p-3 d-flex align-items-center">
            <div className="icon-notif-panel">
              <NewReleasesIcon fontSize="medium"/>
            </div>
            <div className="detail-notif-panel">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5>ورود به سیستم</h5>
              </div>
              <p className="text-notification">
                این یک متن نمونه است که به عنوان محتوای اعلان استفاده می‌شود.
              </p>
              <span>4 روز پیش</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
