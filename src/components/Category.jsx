import CategoryItem from "./CategoryItem";
import { useEffect } from "react";

const Category = ({ data, searchText, setData, dataLength, txt, setDatalength}) => {
  let filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) &&
      item.category === txt
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
        <h2 className="section-recommended-title">{`${txt}`}</h2>
      )}
      <div className="section-recommended-grid">
        {searchText === ""
          ? data
              .filter((item) => item.category === txt)
              .map((item, index) => (
                <CategoryItem item={item} key={index} booked={booked} />
              ))
          : data
              .filter(
                (item, index) =>
                  item.title.toLowerCase().includes(searchText.toLowerCase()) &&
                  item.category === txt
              )
              .map((item, index) => (
                <CategoryItem item={item} key={index} booked={booked} />
              ))}
      </div>
    </div>
  );
};

export default Category;
