import BookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import Bookmarkfull from "../assets/icon-bookmark-full.svg";
import iconMovies from "../assets/icon-category-movie.svg";
import iconsTv from "../assets/icon-category-tv.svg";
import iconPlay from "../assets/icon-play.svg";

const CategoryItem = ({ item, booked }) => {
  return (
    <div className="recommended-item">
      <div className="recommended-item-image">
        <div className="play-hover-container">
          <div className="play-hover-container-inner">
            <img src={iconPlay} alt="play" className="play-hover" />
            <span>Play</span>
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + item.thumbnail.regular.large}
          alt="item"
          className="recommended-item-image-main"
        />
        <div
          className="recommended-item-image-booked"
          onClick={() => {
            booked(item.title);
          }}
        >
          {item.isBookmarked ? (
            <img src={Bookmarkfull} alt="book" className="" />
          ) : (
            <img src={BookmarkEmpty} alt="book" />
          )}
        </div>
      </div>
      <div className="recommended-item-info">
        <div className="recommended-item-info-first">
          <span className="recommended-item-info-year">{item.year}</span>
          <span className="dot"></span>
          <div className="recommended-item-info-icon">
            {item.category === "Movie" ? (
              <img src={iconMovies} alt="movie" />
            ) : (
              <img src={iconsTv} alt="movie" />
            )}
            <span className="recommended-item-info-categ">{item.category}</span>
          </div>
          <span className="dot"></span>
          <span className="recommended-item-info-rating">{item.rating}</span>
        </div>
        <h2 className="recommended-item-info-title">{item.title}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
