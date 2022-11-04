import SearchLogo from "../icons/icon-search.svg";
import { useState } from "react";
import Category from "../components/Category";

const CategoryPage = ({ data, setData, txt }) => {
  const [dataLength, setDatalength] = useState(data.length);

  const [searchText, setSearchText] = useState("");
  
 
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
          placeholder={`Search for ${txt}`}
        />
      </div>
      <Category
        data={data}
        searchText={searchText}
        setData={setData}
        dataLength={dataLength}
        txt={txt}
        setDatalength={setDatalength}
      />
    </section>
  );
};

export default CategoryPage;
