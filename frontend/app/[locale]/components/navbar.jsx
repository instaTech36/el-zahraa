"use client";
import React, { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
export default function Navbar() {
  const t = useTranslations("Index");
  const locale = useLocale();

  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [navItems, setNavItems] = useState({
    home: "Home",
    about: "About",
    products: "Products",
    catalog: "Catalog",
    contactUs: "Contact Us",
  });

  const [category, setCategory] = useState([]);
  const API = process.env.NEXT_PUBLIC_BACKEND_API;

  useEffect(() => {
    fetch(API + "categories")
      .then((response) => response.json())
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <nav className=" animate__animated animate__bounce flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 sticky top-0 z-40 ">
        <div className=" duration-200 container px-4 mx-auto flex flex-wrap items-center justify-between caro">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              El-Zahraa
            </a>
            <button
              className="text-white cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75 "
                  href="/"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 ">{t("home")}</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/about"
                >
                  <span className="ml-2">{t("about")}</span>
                </a>
              </li>

              <li
                className="nav-item relative flex items-center ml-2"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <a
                  className=" px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#"
                >
                  {t("products")}
                  <FontAwesomeIcon
                    className="text-white px-1"
                    icon={faArrowDown}
                  />
                </a>

                <ul
                  className={`absolute top-0 left-0 w-[150px] mt-9 text-center transition-all duration-500   bg-gray-700 rounded shadow-lg overflow-hidden ${
                    hovered
                      ? "visible opacity-100 transition-opacity duration-500"
                      : "invisible opacity-0 transition-opacity duration-500"
                  }`}
                >
                  {category.map((item) => {
                    return (
                      <li
                        
                        className="px-4 text-white pb-3 hover:cursor-pointer hover:bg-gray-800 pt-3"
                      >
                        <a href={`/${item.name_en}`}>{locale=="en"?item.name_en:item.name_ar}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/catalog"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">{t("catalog")}</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/contact"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">{t("contactus")}</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer">
                  <span onClick={(e) => router.push("/ar")} className="ml-2">
                    AR
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer">
                  <span onClick={(e) => router.push("/en")} className="ml-2">
                    EN
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
