import React from "react";
import "./CommentPanel.css";
import SideBarPanel from "../SideBarPanel/SideBarPanel";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import courseComment from "./../../assets/images/wp2_1-1-768x432.webp";
import NorthWestIcon from '@mui/icons-material/NorthWest';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function CommentPanel() {
  return (
    <div className="container comment-panel">
      <div className="row">
        <SideBarPanel />

        <div className="col-9">
          <div className="title-main d-flex ">
            <div className="icon-title-panle">
              <ShopTwoIcon />
            </div>
            <h4 className="me-3 ">پرسش های من</h4>
          </div>

          <div className="panel-comments">
            <div className="box-panel-comments d-flex">
              <img className="img-course-comment" src={courseComment} alt="" />
              <div className="detail-comments">
                <h3>دوره ی ریکت تخصصی</h3>
                <span><FiberManualRecordIcon/>تایید شده</span>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
                <button>دیدن در صفحه دوره<NorthWestIcon/></button>
              </div>
            </div>
            <div className="box-panel-comments d-flex">
              <img className="img-course-comment" src={courseComment} alt="" />
              <div className="detail-comments">
                <h3>دوره ی ریکت تخصصی</h3>
                <span><FiberManualRecordIcon/>تایید شده</span>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
                <button>دیدن در صفحه دوره<NorthWestIcon/></button>
              </div>
            </div>
            <div className="box-panel-comments d-flex">
              <img className="img-course-comment" src={courseComment} alt="" />
              <div className="detail-comments">
                <h3>دوره ی ریکت تخصصی</h3>
                <span><FiberManualRecordIcon/>تایید شده</span>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
                <button>دیدن در صفحه دوره<NorthWestIcon/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
