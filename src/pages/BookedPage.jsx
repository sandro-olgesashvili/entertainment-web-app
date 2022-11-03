import SearchLogo from "../assets/icon-search.svg";
import { useState } from "react";
import Booked from "../components/Booked";

const BookedPage = ({ data, setData }) => {
  const [dataLength, setDatalength] = useState(data.length);
  const [dataLengthTv, setDatalengthTv]= useState(0)

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
          placeholder="Search for movies"
        />
      </div>
      <Booked
        data={data}
        searchText={searchText}
        setData={setData}
        dataLength={dataLength}
        setDatalength={setDatalength}
        dataLengthTv={dataLengthTv}
        setDatalengthTv={setDatalengthTv}
      />
    </section>
  );
};

export default BookedPage;
