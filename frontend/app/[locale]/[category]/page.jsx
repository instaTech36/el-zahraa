"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Card } from "../components/Card";

import img from "@/app/[locale]/img/4.jpg";
import { useLocale, useTranslations } from "next-intl";
import { Spin } from "../components/Spin";

const page = () => {
  let text = useParams();
  let param = text.category;
  let x = param.replace("%20", " ");

  const t=useTranslations("Index")
  const locale=useLocale()

  const [prodImages, setProdImages] = useState([]);
  const [items, setItems] = useState([]);
  
  const [pics, setPics] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setItems(result);
        setLoading(true);
        
      });
  }, []);

  

  useEffect(() => {
    fetch('http://localhost:8000/products')
     .then(response => response.json())
     .then(data => {
        const images = data.map(product => product.prod_images.map(image => image.image));
        const flattenedImages = images.flat();
        const prodImageArrays = [];
        let currentProductImages = [];
        flattenedImages.forEach(image => {
          if (!currentProductImages.includes(image)) {
            currentProductImages.push(image);
          }
          if (currentProductImages.length === images[0].length) {
            prodImageArrays.push(currentProductImages);
            currentProductImages = [];
          }
        });
        setProdImages(prodImageArrays);
      })
     .catch(error => console.error(error));
  }, []);


  console.log(prodImages)


  const filteredItems=items.filter((item)=>item.category_name===x)

  return (
    <div className="flex justify-around flex-wrap mt-20 p-24">
      {loading?filteredItems.map((item,index) => {
        return (
          <>
          <div className="animate__animated animate__bounceIn">
            <Card
            title_en={item.name_en}
            title_ar={item.name_ar}
            image={prodImages[1][3]}
              
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
