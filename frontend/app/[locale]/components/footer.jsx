"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
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
                    <a href={`/${item.name_en}`} className=" hover:underline">
                      {locale == "en" ? item.name_en : item.name_ar}
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
                <a href={`${items.facebook}`} className="hover:underline">
                  {t("facebook")}
                </a>
              </li>
              <li className="mb-4">
                <a href={`${items.whatsapp}`} className="hover:underline">
                  {t("whatsapp")}
                </a>
              </li>
              <li className="mb-4">
                <a href={`${items.chat_me}`} className="hover:underline">
                  {t("wechat")}
                </a>
              </li>
              <li className="mb-4">
                <a href={`${items.linkedin}`} className="hover:underline">
                  {" "}
                  {t("linkedin")}
                </a>
              </li>
              <li className="mb-4">
                <a href={`mailto:${items.gmail}`} className="hover:underline">
                  {" "}
                  {t("gmail")}
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
                <a href="/" className="hover:underline">
                  {t("home")}
                </a>
              </li>
              <li className="mb-4">
                <a href="/about" className="hover:underline">
                  {t("about")}
                </a>
              </li>
              <li className="mb-4">
                <a href="/catalog" className="hover:underline">
                  {t("catalog")}
                </a>
              </li>
              <li className="mb-4">
                <a href="contact" className="hover:underline">
                  {t("emailus")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              {t("address")}
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">       
                  {t("location")}
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
