import React from "react";
import "./EditPanelUser.css";
import SideBarPanel from "../SideBarPanel/SideBarPanel";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import LockPersonIcon from '@mui/icons-material/LockPerson';
export default function EditPanelUser() {
  return (
    <div className="container edit-panel-user">
      <div className="row">
        <SideBarPanel />
        <div className="col-9">
          <div className="title-main d-flex ">
            <div className="icon-title-panle">
              <InsertCommentIcon />
            </div>
            <h4 className="me-3 ">ویرایش پروفایل</h4>
          </div>
          <div className="form-edit-panel-user">
            <div className="form-box-edit-panel d-flex">
              <div className="col-5 d-flex flex-column">
                <label htmlFor="first-name">نام و نام خانوادگی</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
              <div className="col-5 d-flex flex-column">
                <label htmlFor="first-name">نام کاربری</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
              <div className="col-5 d-flex flex-column">
                <label htmlFor="first-name">ایمیل</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
              <div className="col-5 d-flex flex-column">
                <label htmlFor="first-name">شماره تلفن</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
            </div>
            <div className="btn-edit-user">
              <button className="upload-btn">
                آپلود عکس پروفایل
                <span className="mx-3">
                  <SaveAltIcon />
                </span>
              </button>
              <button className="edit-user-panel">ویرایش حساب کاربری</button>
            </div>
          </div>
          <div className="form-edit-panel-user mt-5">
            <div className="form-box-edit-panel d-flex">
              <div className="col-5 d-flex flex-column">
                <label htmlFor="first-name">رمز عبور قبلی</label>
                <input
                  type="password"
                  id="first-name"
                />
              </div>
              <div className="col-5 d-flex flex-column">
                <label htmlFor="first-name">رمز عبور جدید</label>
                <input
                  type="password"
                  id="first-name"
                />
              </div>
              <div className="btn-edit-user w-100 d-flex justify-content-end align-items-center mt-4">
              <button className="edit-user-panel">
                تغییر رمز عبور
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
