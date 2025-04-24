import React from "react";
import DarkMode from "../../components/DarkMode/DarkMode";
import "./Register.css";
import { Link } from "react-router-dom";
import imgregister from "./../../assets/images/main.png";
import googleImg from "./../../assets/images/google.png"
import facebook from "./../../assets/images/facebook.png"
export default function () {
  return (
    <>
      <div className="register-container">
        <DarkMode />
        <div className="register-info">
          <div className="row d-flex w-100 justify-content-between align-items-center text-center">
            <div className="col-6 ">
              <div className="register-form-detail">
                <div className="register-form-title">
                  <h2 className="mb-4">ساخت حساب کاربری</h2>
                  <div className="register__register__btn d-flex">
                    <p>آیا حساب کاربری دارید؟ </p>
                    <Link className="register-btn-register mx-1">ورود</Link>
                  </div>
                </div>
                <div className="register-form-inputs">
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
                <div className="register-form__password-setting d-flex flex-column">
                  <label className="register-form__password-remember">
                    <input
                      className="register-form__password-checkbox"
                      type="checkbox"
                    />
                    <span className="register-form__password-text mx-3">
                      مرا به خاطر داشته باش
                    </span>
                  </label>
                </div>
                <div className="register-btn">
                  <button >ورود</button>
                </div>
                <hr />
                <div className="register-user-account w-100 d-flex justify-content-around align-items-center">
                  <Link className="register-user-account-btn w-100">Google <img className="" src={googleImg} alt="" /></Link>
                  <Link className="register-user-account-btn w-100">Facebook <img src={facebook} alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-6 register__image">
              <img className="register__image" src={imgregister} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
