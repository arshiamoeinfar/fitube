
import React from "react";
import DarkMode from "../../components/DarkMode/DarkMode";
import "./Login.css";
import { Link } from "react-router-dom";
import imglogin from "./../../assets/images/main.png";
import googleImg from "./../../assets/images/google.png"
import facebook from "./../../assets/images/facebook.png"
export default function Login() {
  return (
    <div className="login-container">
    <DarkMode />
    <div className="login-info">
      <div className="row d-flex w-100 justify-content-between align-items-center text-center">
        <div className="col-6 ">
          <div className="login-form-detail">
            <div className="login-form-title">
              <h2 className="mb-4">ورود به حساب کاربری</h2>
              <div className="login__login__btn d-flex">
                <p>آیا حساب کابری نداربد؟ </p>
                <Link className="login-btn-login mx-1">ثبت نام</Link>
              </div>
            </div>
            <div className="login-form-inputs w-100">
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
        <div className="col-6 login__image">
          <img className="login__image" src={imglogin} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}
