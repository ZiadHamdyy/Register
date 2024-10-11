"use client";
import React, { useState } from 'react'
import LeftTopBar from './LeftTopBar';
import OpenSubject from './OpenSubject';
import Subjects from './Subjects';
import { useDispatch, useSelector } from 'react-redux';
import { setleftbar } from '@/app/Redux/Slice/BarsSlice';

export default function LeftBar() {
  const isBarOff = useSelector((state:any) => state.Bars.leftbar);


  return (
    <div
      className={`${isBarOff ? "w-[5%]" : "w-1/4"
        } h-lvh rounded-r-lg shadow-sm shadow-black transition-all duration-300 ease-in-out`}
    >
      <LeftTopBar/>
      <OpenSubject/>
      <Subjects/>
    </div>
  )
}
