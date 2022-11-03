import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperSlider from "./SwiperSlider";

const SwiperImage = ({ data, setData }) => {
  const booked = (id) => {
    setData(
      data.map((item) =>
        item.title !== id ? item : { ...item, isBookmarked: !item.isBookmarked }
      )
    );
  };

  return (
    <Swiper
      grabCursor={true}
      spaceBetween={40}
      breakpoints={{
        375: {
          width: 240,
          height: 140,
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        766: {
          width: 470,
          slidesPerView: 1.1,
        },
        1000: {
          slidesPerView: 2.5,
        },
      }}
    >
      {data
        .filter((item) => item.isTrending === true)
        .map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperSlider item={item} booked={booked} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperImage;
