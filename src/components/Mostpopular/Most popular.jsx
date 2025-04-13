import React from "react";
import "./Mostpopular.css";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import NorthWestIcon from "@mui/icons-material/NorthWest";
const MostPopular = ({ titleName, text, btnText , icon}) => {
  return (
    <div id="container-most" className="container rounded-4 mt-5 p-3">
      <div className="continer-popular  d-flex justify-content-between">
        <div className="row w-100  d-flex justify-content-between align-items-center">
          <div className="col-10 d-flex align-items-center">
            <div className="icon-popular-bac">
              {
                icon
              }
              
            </div>
            <div className="text-poular me-4">
              <h4>{titleName}</h4>
              <p>{text}</p>
            </div>
          </div>
          <div className="col-2">
            <div className="btn-popular">
              {btnText && (
                <button className="btn-disabled-hover">
                  {btnText} <NorthWestIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
