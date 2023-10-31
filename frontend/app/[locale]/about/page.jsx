"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Members from "../components/members";
import { useLocale, useTranslations } from "next-intl";

const page = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setItems(result.profile);
        setLoading(true);
      });
  }, []);


  
  const t=useTranslations("Index")
  const locale=useLocale()

  return (
    <div className=" bg-indigo-50">
      <div className="flex flex-col md:gap-20 justify-around  mx-10 pt-10 pb-24 md:flex-row">
        {loading&&<img
          className=" rounded-full w-[300px] h-[300px]  md:w-[400px] md:h-[400px] md:rounded-full  "
          src={`http://localhost:8000${items.images[1].image}`}
          alt="Image"
           
        />}
    

        <div className=" mt-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-5 text-center md:text-start ">
          {t("title")}
          </h1>
          <h1 className="text-2xl md:text-2xl font-bold mb-5">
            
          </h1>
          <p className="text-start text-xl">
          {locale=="en"?items.description_about_en:items.description_about_ar}
        
          </p>
        </div>
      </div>
      <Members loading={loading} items={items.team} />
    </div>
  );
};
export default page;
