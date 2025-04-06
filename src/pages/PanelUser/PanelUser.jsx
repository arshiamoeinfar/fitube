import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MainPanelUser from "../../components/MainPanel/MainPanelUser";
import { Outlet, useParams } from "react-router-dom";
export default function PanelUser() {

  const {paneluserName} = useParams();

  console.log(paneluserName);
  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
