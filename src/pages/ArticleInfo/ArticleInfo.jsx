import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MostPopular from "../../components/Mostpopular/Most popular";
import SlideshowIcon from "@mui/icons-material/Slideshow";

export default function ArticleInfo() {
  return (
    <>
      <Navbar />
      <MostPopular
        titleName="فرانت اند"
        text="تمام مقالات فرانت اند را ببینید"
        icon={<SlideshowIcon className="icon-popular" fontSize="large" />}
      />
      <div className="container">
        <div className="row"></div>
      </div>

      <Footer />
    </>
  );
}
