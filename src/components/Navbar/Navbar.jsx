import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import logo from "./../../assets/icons/Logo.png"
import "./Navbar.css";
const Header = () => {
  return (
    <Navbar id="navbar" className="container-fluid">
      <Container>
        <Row>
        <Col>
            <div className="text-align-center">
              <img id="logo" src={logo} alt="" />
            </div>
          </Col>

        </Row>
        <Row className="w-50">
          <Col>
          <div className=" d-flex justify-content-center">
              <Link to="/" className="text-white menus">برنامه نویسی</Link>
            </div>
          </Col>
          <Col>
          <div className=" d-flex justify-content-center">
              <Link to="/" className="text-white menus">ترید</Link>
            </div>
          </Col>
          <Col>
          <div className=" d-flex justify-content-center">
              <Link to="/" className="text-white menus">تماس با ما</Link>
            </div>
          </Col>
          <Col>
          <div className=" d-flex justify-content-center">
              <Link to="/" className="text-white menus">مقالات</Link>
            </div>
          </Col>
        </Row>
        <Row>
        <Col>
          <div className=" d-flex justify-content-center">


              <Link to="/" className="text-white menu"><button className="btn  text-white btn-danger "><ShoppingCartIcon/></button></Link>
              <Link to="/" className="text-white menu"><button className="btn  text-white btn-primary "><PersonIcon/></button></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
