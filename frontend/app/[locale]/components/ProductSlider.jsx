
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductSlider = ({images}) => {
  
  return (
    <Swiper
    navigation={{ clickable: true }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 1,
        },

        900:{
          slidesPerView:2,
        },
        1200: {
          slidesPerView: 3,
        },
  
      }}
    >
      {images.map((item,index)=>{
        return(
          
          <div key={index}>
          <SwiperSlide><img src={images[index]} alt="product image" className='object-contain max-w-[400px] rounded-lg'/></SwiperSlide>
          
          </div>
  
        
        )
      }
      )
      }
    </Swiper>
  );
};
export default ProductSlider;