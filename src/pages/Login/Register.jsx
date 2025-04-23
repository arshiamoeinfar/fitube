import React from "react";
import DarkMode from "../../components/DarkMode/DarkMode";
import "./Register.css";
import { Link } from "react-router-dom";
import imgLogin from "./../../assets/images/main.png";
import googleImg from "./../../assets/images/google.png"
import facebook from "./../../assets/images/facebook.png"
export default function () {
  return (
    <>
      <div className="login-container">
        <DarkMode />
        <div className="login-info">
          <div className="row d-flex w-100 justify-content-between align-items-center text-center">
            <div className="col-6 ">
              <div className="login-form-detail">
                <div className="login-form-title">
                  <h2 className="mb-4">ساخت حساب کاربری</h2>
                  <div className="login__register__btn d-flex">
                    <p>آیا حساب کاربری دارید؟ </p>
                    <Link className="register-btn-login mx-1">ورود</Link>
                  </div>
                </div>
                <div className="login-form-inputs">
                  <div className="d-flex ">
                    <div className="col">
                      <input type="text" placeholder="نام خود را وارد کنید" />
                    </div>
                    <div className="col me-4">
                      <input
                        type="text"
                        placeholder="فامیلی خود را وارد کنید"
                      />
                    </div>
                  </div>
                  <input type="text" placeholder="ایمیل خود را وارد کنید" />
                  <input type="text" placeholder="رمز عبور خود را وارد کنید" />
                </div>
                <div className="login-form__password-setting d-flex flex-column">
                  <label className="login-form__password-remember">
                    <input
                      className="login-form__password-checkbox"
                      type="checkbox"
                    />
                    <span className="login-form__password-text mx-3">
                      مرا به خاطر داشته باش
                    </span>
                  </label>
                </div>
                <div className="login-btn">
                  <button >ورود</button>
                </div>
                <hr />
                <div className="login-user-account w-100 d-flex justify-content-around align-items-center">
                  <Link className="login-user-account-btn w-100">Google <img className="" src={googleImg} alt="" /></Link>
                  <Link className="login-user-account-btn w-100">Facebook <img src={facebook} alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img src={imgLogin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
