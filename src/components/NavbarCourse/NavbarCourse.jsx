import React from 'react'
import "./NavbarCourse.css"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
export default function NavbarCourse() {
  return (
    <div className="navbarCourse mt-5 ">
    <div className="btn-nav active">
      <CreateOutlinedIcon className="icon-nav-course"/>
    <Link className="link-nav-course">معرفی</Link>
    </div>
    <div className="btn-nav">
      <MenuOutlinedIcon/>
    <Link className="link-nav-course">سرفصل ها</Link>
    </div>
    <div className="btn-nav">
      <CommentOutlinedIcon/>
    <Link className="link-nav-course">دیدگاه و پرسش</Link>
    </div>
  </div>
  )
}
