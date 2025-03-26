
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import BoxHeader from "../BoxHeader/BoxHeader";
import main from "./../../assets/images/main.png";
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
const AnimatedHeader = () => {
  return (
    <div className="container-fluid  ">
     <div  className="container bg-black rounded-4 p-5 main">

      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-6">
          <div className="header">
            <span id='span-off'>جشنواره تخفیفات نوروزی رو از دست نده <CampaignOutlinedIcon/></span>
            <h1 className="title-main">ویدیو های یوتیوب را با ترجمه اختصاصی ببینید!</h1>
            <p className="text-main">یادگیری یک مهارت جدید آرزو نیست، فقط نیاز هست که تلاش و تمرین داشته باشید، بقیه‌اش با فیتیوب</p>
            <div id="container-input-search" className="input-group mb-3 bg-light">
              <button id="btn-search" className="" type="button">
                <SearchIcon />
              </button>
              <input
              id="input-search"
              type="text" className="form-control " placeholder="یه دوره رو جستجو کن..." />
            </div>
          </div>
        </div>
        <div className="col-6  d-flex justify-content-center align-items-center">
          <img className="img-main-header" src={main} alt="" />
        </div>
      </div>
     </div>
    </div>
  );
};

export default AnimatedHeader;