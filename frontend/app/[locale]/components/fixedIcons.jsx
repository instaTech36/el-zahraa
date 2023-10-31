"use client"
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';
import { AiOutlineWhatsApp, AiFillWechat } from 'react-icons/ai';
import { FaArrowCircleUp } from 'react-icons/fa';

function FixedIcons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='hidden lg:block fixed z-30 w-[75px] left-[95%] top-[70%] caro'>
  
      <div className=' w-[75px]  z-30 mb-2'>
        <a
          className='   text-blue-500 cursor-pointer font-bold text-4xl transition-all duration-300 hover:text-blue-700'
          title='Facebook'
        >
          <FaFacebook />
        </a>
        </div>
        
      <div className=' w-[75px]  z-30 mb-2'>
      <a href="mailto:"
            className=' text-yellow-800 cursor-pointer font-bold text-4xl transition-all duration-300 hover:text-yellow-900'
            title='Email'
          >
            <FaEnvelope />
          </a>
      </div>
      <div className=' w-[75px]  z-30 mb-2'>
          <a
            className=' text-green-500 cursor-pointer  font-bold text-4xl transition-all duration-300 hover:text-green-700 mb-2'
            title='WhatsApp'
          >
            <AiOutlineWhatsApp />
          </a>
      </div>
      <div className=' w-[75px]  z-30'>
          <a
            className=' text-green-500 cursor-pointer  font-bold text-4xl transition-all duration-300 hover:text-green-700 mb-2'
            title='WeChat'
          >
            <AiFillWechat />
          </a>
      </div>
        <div className='w-[75px] z-30'>
          <a
            className=' text-red-400 cursor-pointer font-bold text-4xl transition-all duration-300 hover:text-green-700 mb-2 mt-1'
            style={{ display: isVisible? 'block' : 'none' }}
            onClick={goTop}
          >
            <FaArrowCircleUp />
          </a>
        </div>
    
    
  </div>
  

  
  );
}

export default FixedIcons;
