import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const ProductSlider = ({ images }) => {
  return (
    <Swiper
    
      navigation={{ clickable: true }}
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      Autoplay
      spaceBetween={1}
      slidesPerView={3}
      autoplay={{
        delay: 3500,
      }}
   
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 1,
        },

        900: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {
      images.map((item, index) => {
        return (
          <div key={index}>
            <SwiperSlide>
              <img
                src={images[index].image}
                alt="product image "
                className="animate__animated animate__bounceIn rounded-lg 0 h-[200px] w-[300px] md:h-[230px] md:w-[370px] md:hover:w-[380px] md:hover:h-[240px] duration-500"
              />
            </SwiperSlide>
          </div>
        );
      })
      }
    </Swiper>
  );
};
export default ProductSlider;
