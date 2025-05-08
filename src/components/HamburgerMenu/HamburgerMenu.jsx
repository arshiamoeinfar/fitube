import React, { useState } from "react";
import "./HamburgerMenu.css";
import MenuIcon from '@mui/icons-material/Menu';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "./../../assets/icons/Logo.png";
import DarkMode from "./../DarkMode/DarkMode"
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function HamburgerMenu({ navLinks , name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <div className="hamburger-menu d-lg-none" onClick={(handleShow)}>
      <MenuIcon />
      </div>
      <Offcanvas className= "custom__offcanvas"show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="d-flex justify-content-between">
     <img className="logo-navbar" src={logo} alt="" />
        </Offcanvas.Header>
        <Offcanvas.Body >
        <div className="search__Input">
        <SearchIcon />
              <input type="text" placeholder="دنبال کدوم دوره میگردی؟؟" />
            </div>
            <hr />
          <div className="courses__filter__ d-flex align-items-center  justify-content-between mt-3">
            <span className="text me-2">تم تاریک</span>
            <DarkMode iconDarkMode={true}/>
          </div>
          <hr />
          <div className="storing__box w-100">
              <div className="selection__title d-flex align-items-start justify-content-between">
                <h5 className="m-0">دسته بندی آموزشها</h5>
              </div>
              <ExpandMoreIcon />
              
              {/* active class */}
              <ul className="selection__list d-flex  flex-column justify-content-start active">
                <div className="selection__list__navbar">
                  <div className="d-flex bg-primary">
                <KeyboardArrowLeftIcon className="" />
                <h6 className="">طراحی سایت</h6>
                  </div>
                </div>
              </ul>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )

}
