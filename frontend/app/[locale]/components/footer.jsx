"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import {  AiFillWechat, AiFillHome } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineElectricBolt , MdLocationOn, MdProductionQuantityLimits } from 'react-icons/md';
import { BsFileEarmarkPdfFill ,BsFillCartCheckFill} from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FcAbout } from 'react-icons/fc';
import { GiEgyptianSphinx } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';




function Footer() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);
  const API = process.env.NEXT_PUBLIC_BACKEND_API;

  useEffect(() => {
    fetch(API + "categories")
      .then((response) => response.json())
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(API)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setItems(result.profile);
      });
  }, []);

  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <footer className=" bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white flex items-center gap-2">
              <BsFillCartCheckFill className="text-2xl text-light-blue-800"/>{t("ourproducts")}
            </h2>
            <ul className=" text-gray-400 font-medium">
              {category.map((item) => {
                return (
                  <li className="mb-4">
                    <a href={`/${item.name_en}`} className=" hover:underline flex items-center gap-2">
                    <MdProductionQuantityLimits className="text-cyan-700 text-2xl" />  {locale == "en" ? item.name_en : item.name_ar}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white  flex items-center gap-2">
              <HiUserGroup className="text-teal-700 text-2xl"/> {t("contactus")}
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <a href={`${items.facebook}`} className="hover:underline flex items-center gap-2">
                  <FaFacebook className="text-blue-500 text-2xl"/> {t("facebook")}
                </a>
              </li>
              <li className="mb-4">
                <a href={`${items.linkedin}`} className="hover:underline  flex items-center gap-2">
                  {" "}
              <FaLinkedin className="text-blue-500 text-2xl"/>  {t("linkedin")}
                </a>
              </li>
              <li className="mb-4">
                <a href={`${items.whatsapp}`} className="hover:underline  flex items-center gap-2">
                <IoLogoWhatsapp className="text-green-500 text-2xl"/>  {t("whatsapp")}
                </a>
              </li>
              <li className="mb-4">
                <a href={`${items.chat_me}`} className="hover:underline  flex items-center gap-2">
                  <AiFillWechat className="text-green-500 text-2xl"/>  {t("wechat")}
                </a>
              </li>
              
              
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white flex items-center gap-2">
            <MdOutlineElectricBolt className="text-blue-700 text-2xl"/> {t("quicklinks")}
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/" className="hover:underline flex items-center gap-2">
                <AiFillHome className="text-cyan-300 text-2xl"/>  {t("home")}
                </a>
              </li>
              <li className="mb-4">
                <a href="/about" className="hover:underline flex items-center gap-2">
                <FcAbout  className="text-blue-700 text-2xl"/>   {t("about")}
                </a>
              </li>
              <li className="mb-4">
                <a href="/catalog" className="hover:underline flex items-center gap-2">
                  <BsFileEarmarkPdfFill className="text-red-700 text-2xl"/> {t("catalog")}
                </a>
              </li>
              <li className="mb-4">
                <a href={`/contact`} className="hover:underline  flex items-center gap-2">
                  {" "}
                  <FaEnvelope className="text-yellow-500 text-2xl"/>{t("emailus")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white flex items-center gap-2">
            <MdLocationOn className="text-cyan-700 text-2xl"/>  {t("address")}
            </h2>
            <ul className="text-gray-400 font-medium ">
              <li className="mb-4 flex items-center gap-2">       
            <GiEgyptianSphinx className="text-yellow-700 text-2xl"/>   {t("location")}
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6  bg-gray-700 text-center">
          <span className="text-sm text-gray-300 text-center">
           © 2023 <a href="/">El-Zahraa</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
