import { useEffect } from "react";
import RecommendedItem from "./RecommendedItem";

const Recommended = ({
  data,
  searchText,
  setData,
  dataLength,
  setDatalength,
}) => {
  let filteredData = data.filter((item, index) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const booked = (id) => {
    setData(
      data.map((item) =>
        item.title !== id ? item : { ...item, isBookmarked: !item.isBookmarked }
      )
    );
  };

  useEffect(() => {
    setDatalength(filteredData.length);
  }, [searchText]);

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
        {searchText === ""
          ? data
              .filter((item) => item.isTrending === false)
              .map((item, index) => (
                <RecommendedItem item={item} key={index} booked={booked} />
              ))
          : filteredData
              .filter((item, index) =>
                item.title.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((item, index) => (
                <RecommendedItem item={item} key={index} booked={booked} />
              ))}
      </div>
    </div>
  );
};

export default Recommended;
