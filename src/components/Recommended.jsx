import { useState, useEffect } from "react";
import RecommendedItem from "./RecommendedItem";

const Recommended = ({ data, searchText }) => {
  const [mainData, setMainData] = useState([]);
  const [dataLength, setDatalength] = useState(mainData.length);

  useEffect(() => {
    if (searchText.length > 0) {
      setMainData(
        data.filter(
          (item) =>
            item.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        )
      );
    } else {
      setMainData(data.filter((item) => item.isTrending === false));
    }
  }, [searchText, dataLength]);

  useEffect(() => {
    setDatalength(mainData.length);
  }, [mainData]);

  return (
    <div className="section-recommended">
      {searchText.length > 0 ? (
        <h2 className="section-recommended-title">
          Found {dataLength} results for "{searchText}"
        </h2>
      ) : (
        <h2 className="section-recommended-title">Recommended for you</h2>
      )}
      <div className="section-recommended-grid">
        {mainData.map((item, index) => (
          <RecommendedItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
