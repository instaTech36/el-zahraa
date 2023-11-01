"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";

const Experience = () => {

  const t=useTranslations("Index")
  const locale=useLocale()
  const API = process.env.NEXT_PUBLIC_BACKEND_API;
  let firstImage="";

  const [item, setItem] = useState({});
  const [logo, setLogo] = useState();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get(API).then((response) => {
      setItem(response.data.profile);
    });
  }, []);

  useEffect(() => {
    axios.get(API+"categories").then((response) => {
      setCategory(response.data);
    });
  }, []);

  fetch(API)
  .then(response => response.json())
  .then(data => {
     firstImage = data.profile.images[0].image;
     setLogo(firstImage)
   })
  .catch(error => console.error(error));


 




  return (
    <div className="row lg:flex mb-20 justify">
      <div className="col-lg-6 p-0 lg:w-1/2">
        <img
          className="hidden md:block w-full h-full"
          src={API+logo}
          alt="Logo"
          
        />
      </div>
      <div className="col-lg-6 p-0 lg:w-1/2 pl-10 pr-10 pt-10">
        <div>
          <h2 className="text-3xl mb-5 font-bold">{t("title")}</h2>
          <p className="leading-7 mb-2 w-[92%] font-bold text-xl">
            {locale=="en"?item.title_en:item.title_ar}
          </p>
          <p className="mb-10">
          {locale=="en"?item.profile_en:item.profile_ar}
            <Link href="/about">
              <button className="text-white bg-gray-900 px-4 py mx-2 my-1  rounded-md transition duration-300 all hover:bg-red-400 font-bold  text-sm">
              {t("more")}
              </button>
            </Link>
          </p>

          <h2 className="text-3xl mb-5 font-bold">{t("products")}</h2>
          <ul className="grid grid-cols-2 gap-12 font-bold">
            
                {
                  category.map((item)=>{
                    return(
                      <li className="hover:text-red-600 transition-all duration-150">
                        <a href={`/${item.name_en}`} >
                        {locale=="en"?item.name_en:item.name_ar}
                        </a>
                      </li>
                    )
                  })
                }
            
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
