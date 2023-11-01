"use client";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

import { Spin } from "./Spin";
import { useLocale, useTranslations } from "next-intl";

import { Cairo } from '@next/font/google';

const cairo=Cairo({
  subsets:['latin'],
  weight:'400'
})

const API = process.env.NEXT_PUBLIC_BACKEND_API;
const Slider1 = () => {
  const [items, setItem] = useState([]);
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    fetch(API+"categories")
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
      setLoading(true)
  }, []
  
  );

  const t=useTranslations("Index")
  const locale=useLocale()


  

  return (
    <Carousel autoplay={true} loop={true} className="caro">
      {loading?items.map((item) => {
        return (

          <div key={item.id} className="relative h-full w-full animate__animated animate__fadeInDown">
            <img
              src={item.image1}
              alt="image 1"
              className="h-full"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <h1
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white font-bold"
                >
                  {locale=="en"?item.name_en:item.name_ar}
                </h1>
                <p
                  className="hidden md:block mb-12 opacity-80 text-2xl text-white"
                >
                  {locale=="en"?item.description_en:item.description_ar}
                </p>
                <div className="flex justify-center gap-2">

                  <a href={item.name_en}>
                  <button className="text-black bg-white rounded-lg py-3 px-7 text-xl transition-all duration-300 hover:bg-gray-300 ">
                  {t("more")}
                  </button >
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        );
      }):<Spin/>}
    </Carousel>
  );
};

export default Slider1;
