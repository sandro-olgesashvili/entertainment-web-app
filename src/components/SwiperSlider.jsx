import BookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import Bookmarkfull from "../assets/icon-bookmark-full.svg";
import iconMovies from "../assets/icon-category-movie.svg";
import iconsTv from "../assets/icon-category-tv.svg";
import iconPlay from "../assets/icon-play.svg";
import "swiper/css";
import { useState } from "react";

const SwiperSlider = ({ item }) => {
  const [bookmark, setBookmark] = useState(item.isBookmarked);
  return (
    <>
      <div className="play-hover-container">
        <div className="play-hover-container-inner">
          <img src={iconPlay} alt="play" className="play-hover" />
          <span>Play</span>
        </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + item.thumbnail.trending.large}
        alt="log"
        className="section-image"
      />
      <div
        className="swiper-icon-bookmark-empty"
        onClick={() => {
          setBookmark(!bookmark);
          console.log(bookmark);
        }}
      >
        {bookmark ? (
          <img src={Bookmarkfull} alt="book" />
        ) : (
          <img src={BookmarkEmpty} alt="book" />
        )}
      </div>

      <div className="swiper-details">
        <div className="swiper-details-firts">
          <span className="swiper-details-year">{item.year}</span>
          <span className="dot"></span>
          <div className="swiper-details-image">
            {item.category === "Movie" ? (
              <img src={iconMovies} alt="movie" />
            ) : (
              <img src={iconsTv} alt="movie" />
            )}
            <span className="swiper-details-category">{item.category}</span>
          </div>
          <span className="dot"></span>
          <span className="swiper-details-rating">{item.rating}</span>
        </div>
        <h2 className="swiper-details-title">{item.title}</h2>
      </div>
    </>
  );
};

export default SwiperSlider;
