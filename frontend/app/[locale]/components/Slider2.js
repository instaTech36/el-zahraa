"use client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { useEffect, useState } from "react";
import { Card } from "./Card";
import { useLocale, useTranslations } from 'next-intl';

const Slider2 = () => {

  const [items, setItem] = useState([]);
  const API = process.env.NEXT_PUBLIC_BACKEND_API;

  useEffect(() => {
    fetch(API+"categories")
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
  }, []);

  const t=useTranslations("Index")
  const locale=useLocale()

  
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
      

      {items.map((item,index)=>{
        return(
    
          <div>
          <SwiperSlide><Card image={item.image2}  title_en={item.name_en} title_ar={item.name_ar} description= {locale=="en"?item.description_en:item.description_ar}/></SwiperSlide>

          </div>
        
        )
      }
      )
      }

      
    
    </Swiper>

  );
};

export default Slider2;
