"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import { AiOutlineWhatsApp, AiFillWechat, AiFillHome } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineElectricBolt , MdLocationOn, MdProductionQuantityLimits } from 'react-icons/md';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';


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
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              {t("ourproducts")}
            </h2>
            <ul className=" text-gray-400 font-medium">
              {category.map((item) => {
                return (
                  <li className="mb-4">
                    <a href={`/${item.name_en}`} className=" hover:underline flex items-center gap-2">
                    <MdProductionQuantityLimits/>  {locale == "en" ? item.name_en : item.name_ar}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              {t("contactus")}
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <a href={`${items.facebook}`} className="hover:underline flex items-center gap-2">
                  <FaFacebook/> {t("facebook")}
                </a>
              </li>
              <li className="mb-4">
                <a href={`${items.whatsapp}`} className="hover:underline  flex items-center gap-2">
                <AiOutlineWhatsApp/>  {t("whatsapp")}
                </a>
              </li>
              <li className="mb-4">
                <a href={`${items.chat_me}`} className="hover:underline  flex items-center gap-2">
                  <AiFillWechat/>  {t("wechat")}
                </a>
              </li>
              <li className="mb-4">
                <a href={`${items.linkedin}`} className="hover:underline  flex items-center gap-2">
                  {" "}
              <FaLinkedin/>  {t("linkedin")}
                </a>
              </li>
              
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              {t("quicklinks")}
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/" className="hover:underline flex items-center gap-2">
                <AiFillHome/>  {t("home")}
                </a>
              </li>
              <li className="mb-4">
                <a href="/about" className="hover:underline flex items-center gap-2">
                  <MdOutlineElectricBolt/> {t("about")}
                </a>
              </li>
              <li className="mb-4">
                <a href="/catalog" className="hover:underline flex items-center gap-2">
                  <BsFileEarmarkPdfFill/> {t("catalog")}
                </a>
              </li>
              <li className="mb-4">
                <a href={`/contact`} className="hover:underline  flex items-center gap-2">
                  {" "}
                  <FaEnvelope/>{t("emailus")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              {t("address")}
            </h2>
            <ul className="text-gray-400 font-medium ">
              <li className="mb-4 flex items-center gap-2">       
              <MdLocationOn/>  {t("location")}
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
