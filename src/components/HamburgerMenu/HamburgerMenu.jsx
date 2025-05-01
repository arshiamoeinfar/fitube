import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./HamburgerMenu.css";
import MenuIcon from '@mui/icons-material/Menu';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



export default function HamburgerMenu({ navLinks , name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <div className="hamburger-menu d-md-none" onClick={(handleShow)}>
      <MenuIcon />
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )

}
