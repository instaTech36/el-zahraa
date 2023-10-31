"use client";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import { AiOutlineWhatsApp, AiFillWechat } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function FixedIcons() {
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState({});
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
  
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(items)

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



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
  
  return (
    <div className="hidden lg:block fixed z-30 w-[75px] left-[95%] top-[70%] caro">
      <div className=" w-[75px]  z-30 mb-2">
        <a
        href={`${items.facebook}`}
          className="   text-blue-500 cursor-pointer font-bold text-4xl transition-all duration-300 hover:text-blue-700"
          title="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
      <div className="w-[75px] z-30">
        <a
        href={`${items.linkedin}`}
          className="text-blue-500 cursor-pointer font-bold text-4xl transition-all duration-300 hover:text-blue-700 mb-2"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className=" w-[75px]  z-30 mb-2">
        <a
          href={`mailto:${items.gmail}`}
          className=" text-yellow-800 cursor-pointer font-bold text-4xl transition-all duration-300 hover:text-yellow-900"
          title="Email"
        >
          <FaEnvelope />
        </a>
      </div>
      <div className=" w-[75px]  z-30 mb-2">
        <a
        href={`${items.whatsapp}`}
          className=" text-green-500 cursor-pointer  font-bold text-4xl transition-all duration-300 hover:text-green-700 mb-2"
          title="WhatsApp"
        >
          <AiOutlineWhatsApp />
        </a>
      </div>
      <div className=" w-[75px]  z-30">
        <a
          href={`${items.chat_me}`}
          className=" text-green-500 cursor-pointer  font-bold text-4xl transition-all duration-300 hover:text-green-700 mb-2"
          title="WeChat"
        >
          <AiFillWechat />
        </a>
      </div>

      

      <div className="w-[75px] z-30">
        <a
          className=" text-red-400 cursor-pointer font-bold text-4xl transition-all duration-300 hover:text-green-700 mb-2 mt-1"
          style={{ display: isVisible ? "block" : "none" }}
          onClick={goTop}
        >
          <FaArrowCircleUp />
        </a>
      </div>
    </div>
  );
}

export default FixedIcons;
