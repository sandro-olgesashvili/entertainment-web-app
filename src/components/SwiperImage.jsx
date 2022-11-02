import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import SwiperSlider from "./SwiperSlider";

const SwiperImage = ({ data }) => {
  const [swiperData, setSwiperData] = useState([]);
  useEffect(() => {
    setSwiperData(data.filter((item) => item.isTrending === true));
  }, []);
  return (
    <Swiper slidesPerView={2.4} grabCursor={true} spaceBetween={40}>
      {swiperData.map((item, index) => (
        <SwiperSlide key={index}>
         <SwiperSlider item={item}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImage;
