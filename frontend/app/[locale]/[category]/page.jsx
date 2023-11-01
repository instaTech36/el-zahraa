"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Card } from "../components/Card";

import { useLocale, useTranslations } from "next-intl";
import { Spin } from "../components/Spin";

const page = () => {
  let text = useParams();
  let param = text.category;
  let x = param.replace("%20", " ");

  const t=useTranslations("Index")
  const locale=useLocale()
  const API = process.env.NEXT_PUBLIC_BACKEND_API;

  const [items, setItems] = useState([]);
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(API+"products")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setItems(result);
        setLoading(true);
        
      });
  }, []);





  const filteredItems=items.filter((item)=>item.category_name===x)

  const imageUrls = filteredItems.map(item => {
    if (item.prod_images && item.prod_images.length > 0) {
      return item.prod_images[0].image;
    } else {
      return null;
    }
  });

  console.log(imageUrls)
  
  

  return (
    <div className="flex justify-around flex-wrap mt-20 p-24">
      {loading?filteredItems.map((item,index) => {
        return (
          <>
          <div className="animate__animated animate__bounceIn">
            <Card
            title_en={item.name_en}
            title_ar={item.name_ar}
            image={imageUrls[index]}
              
              description={locale=="en"?item.description_en:item.description_ar}
              category={item.category_name}

            />
          </div>

        </>
        );
      }):<Spin/>}
    </div>
  );
};

export default page;
