
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import BoxHeader from "../BoxHeader/BoxHeader";

const AnimatedHeader = () => {
  return (
    <div className="container-fluid header">
      <div className="texts-header">
        <h1 className="text-4xl font-bold relative z-10 font-custom">ویدیو های <span>یوتیوب</span> را با ترجمه اختصاصی ببیندید!!</h1>
        <div className="search-container">
          <SearchIcon id="btn-search" />
          <input type="text" placeholder="جستجوی ویدیو" />
        </div>
      </div>
      <BoxHeader />
    </div>
  );
};

export default AnimatedHeader;