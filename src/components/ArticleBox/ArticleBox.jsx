import React from 'react'
import "./ArticleBox.css"
import imgArticle from "./../../assets/images/wp2_1-1-768x432.webp";
import userImg from "./../../assets/images/01.jpeg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export default function ArticleBox() {
  return (
    <div className="article__box mt-4 mx-2">
      <div className="image__article">
        <img className="" src={imgArticle} alt="" />
      </div>
      <div className="article__info ">
        <h4>دوره طراحی سایت از صفر</h4>
        <div className="article__author d-flex align-items-center justify-content-between">
          <div className="article__author__about  ">
            <img src={userImg} alt="" />
            <h5 className="mx-1 mt-1">ارشیا معین فر</h5>
          </div>
          <div className="article__category">
            <span>فرانت اند</span>
          </div>
        </div>
        <hr />
        <div className="time__study d-flex align-items-center justify-content-end mt-2">
          <div className="icon__time">
          <AccessTimeIcon fontSize="small" />
          <span className="time__study__ mx-2">زمان مطالعه :</span>

          </div>

          <div className="time__">
            <span>20 دقیقه</span>
          </div>
        </div>
      </div>
    </div>
  )
}
