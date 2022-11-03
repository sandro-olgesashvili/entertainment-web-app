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
    <Swiper slidesPerView={2.5} grabCursor={true} spaceBetween={40}>
      {data.filter((item) => item.isTrending === true).map((item, index) => (
        <SwiperSlide key={index}>
          <SwiperSlider item={item} booked={booked} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImage;
