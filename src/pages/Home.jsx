import mainData from "../data.json";
import SearchLogo from "../assets/icon-search.svg";
import SwiperImage from "../components/SwiperImage";
import { useState } from "react";
import Recommended from "../components/Recommended";

const Hoem = () => {
  const [data, setData] = useState(mainData);
  const [searchText, setSearchText] = useState("")

  
  return (
    <section className="main-section">
      <div className="search">
        <img src={SearchLogo} alt="Search" className="icon-search" />
        <input
          type="text"
          name="text"
          id="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
          placeholder="Search for movies or TV series"
        />
      </div>
      {searchText.length === 0 && <div className="section-trending">
        <h2 className="section-trending-title">Trending</h2>
        <SwiperImage data={data} />
      </div>}
      <Recommended  data={data} searchText={searchText}/>
    </section>
  );
};

export default Hoem;
