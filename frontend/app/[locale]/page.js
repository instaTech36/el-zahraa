"use client"

import React from 'react'
import Slider1 from './components/Slider1'
import Experience from './components/Experience'
import { Card } from './components/Card'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Slider2 from './components/Slider2'

import {Cairo} from "@next/font/google"



const page = () => {
  return (
    <div>
      <Slider1/>
      <Experience/>
      <Slider2/>    
    </div>
  )
}

export default page