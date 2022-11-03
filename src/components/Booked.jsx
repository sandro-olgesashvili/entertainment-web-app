import { useEffect } from "react";
import BookedItem from "./BookedItem";

const Booked = ({
  data,
  searchText,
  setData,
  dataLength,
  setDatalength,
  setDatalengthTv,
  dataLengthTv,
}) => {
  let filteredDataMovie = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) &&
      item.isBookmarked === true &&
      item.category === "Movie"
  );

  let filteredDataTv = data.filter(
    (item, index) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) &&
      item.isBookmarked === true &&
      item.category === "TV Series"
  );
  const booked = (id) => {
    setData(
      data.map((item) =>
        item.title !== id ? item : { ...item, isBookmarked: !item.isBookmarked }
      )
    );
  };

  useEffect(() => {
    setDatalength(filteredDataMovie.length);
    setDatalengthTv(filteredDataTv.length);
  }, [searchText]);

  return (
    <div className="section-recommended">
      {searchText.length > 0 ? (
        <h2 className="section-recommended-title">
          Found Movies {dataLength} results for "{searchText}"
        </h2>
      ) : (
        <h2 className="section-recommended-title">Bookmarked Movies</h2>
      )}
      <div className="section-recommended-grid">
        {searchText === ""
          ? data
              .filter(
                (item) =>
                  item.isBookmarked === true && item.category === "Movie"
              )
              .map((item, index) => (
                <BookedItem item={item} key={index} booked={booked} />
              ))
          : data
              .filter(
                (item, index) =>
                  item.title.toLowerCase().includes(searchText.toLowerCase()) &&
                  item.isBookmarked === true &&
                  item.category === "Movie"
              )
              .map((item, index) => (
                <BookedItem item={item} key={index} booked={booked} />
              ))}
      </div>
      {searchText.length > 0 ? (
        <h2 className="section-recommended-title" style={{ marginTop: "40px" }}>
          Found TV Series {dataLengthTv} results for "{searchText}"
        </h2>
      ) : (
        <h2 className="section-recommended-title" style={{ marginTop: "40px" }}>
          Bookmarked TV Series
        </h2>
      )}
      <div className="section-recommended-grid">
        {searchText === ""
          ? data
              .filter(
                (item) =>
                  item.isBookmarked === true && item.category === "TV Series"
              )
              .map((item, index) => (
                <BookedItem item={item} key={index} booked={booked} />
              ))
          : data
              .filter(
                (item, index) =>
                  item.title.toLowerCase().includes(searchText.toLowerCase()) &&
                  item.isBookmarked === true &&
                  item.category === "TV Series"
              )
              .map((item, index) => (
                <BookedItem item={item} key={index} booked={booked} />
              ))}
      </div>
    </div>
  );
};

export default Booked;
