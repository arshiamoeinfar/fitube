import React, { useState } from "react";
import "./ArticleCategories.css";
import AppsIcon from "@mui/icons-material/Apps";
import Footer from "../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import MostPopular from "../../components/Mostpopular/Most popular";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ArticleBox from "../../components/ArticleBox/ArticleBox";
export default function ArticleCategories() {
  const [age, setAge] = useState("مرتب کنید");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Navbar />
      <MostPopular
        titleName="فرانت اند - FrontEnd "
        text="از گوشه و اطراف حوزه ی فرانت اند"
        icon={<AppsIcon style={{ color: "white" }} />}
      />
      <div className="container d-flex">
        <div className="col-4">
          <div className="side__right__category__article">
            <div className="tags__right__category__article">
              <div className="title__right__category__article mt-3">
                <h4>تگ های محبوب</h4>
              </div>
              <div className="tag__right__category__article d-flex flex-wrap mt-4 ">
                <div className="box__category__article m-2 ">
                  <h5 className="active"> #ریکت</h5>
                </div>
                <div className="box__category__article m-2">
                  <h5 className="active">#لاراول</h5>
                </div>
                <div className="box__category__article m-2">
                  <h5>#طراحی-سایت</h5>
                </div>
                <div className="box__category__article m-2">
                  <h5> #ریکت</h5>
                </div>
                <div className="box__category__article m-2">
                  <h5>#لاراول</h5>
                </div>
                <div className="box__category__article m-2">
                  <h5>#طراحی-سایت</h5>
                </div>
                <div className="box__category__article m-2">
                  <h5> #ریکت</h5>
                </div>
                <div className="box__category__article m-2">
                  <h5>#لاراول</h5>
                </div>
                <div className="box__category__article m-2">
                  <h5>#طراحی-سایت</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="storing__category__article d-flex align-items-center">
            <div className="storing__box__text">
              <TuneOutlinedIcon className="" />
              <h5 className="mx-1">مرتب سازی :</h5>
            </div>
            <div className="storing__box">
              <div className="selection__title d-flex align-items-start justify-content-between">
                <h5 className="m-0">انتخاب کنید</h5>
              </div>
              <ExpandMoreIcon />
              {/* active class */}
              <ul className="selection__list d-flex  flex-column justify-content-start">
                <li className="selection__item">بیشترین بازدید</li>
                <li className="selection__item">محبوب ترین</li>
                <li className="selection__item">جدید ترین ها</li>
                <li className="selection__item">بیشترین بازدید</li>
              </ul>
            </div>
          </div>
          <div className="article__box__ d-flex flex-wrap justify-content-start align-items-start">
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
