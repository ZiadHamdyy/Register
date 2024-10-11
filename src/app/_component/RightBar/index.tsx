"use client";
import React, { use, useEffect, useState } from "react";
import RightTopBar from "./RightTopBar";
import { useDispatch, useSelector } from "react-redux";
import AddStudent from "./AddStudent";
import Students from "./Students";
import { setrightbar, setrightbaroff } from "@/app/Redux/Slice/BarsSlice";

export default function RightBar() {
  const currentSubject = useSelector((state: any) => state.subject.currentSubject);
  
    const isBarOff = useSelector((state:any) => state.Bars.rightbar);
    const dispatch = useDispatch()

  useEffect(() => {
    if (currentSubject) {
      dispatch(setrightbaroff())
    }
  }, [currentSubject])

  return (
    <div
      className={`fixed top-0 right-0 ${isBarOff ? "w-[5%]" : "w-1/4"
        } h-full rounded-l-lg shadow-sm shadow-black transition-all duration-300 ease-in-out`}
    >
      <RightTopBar/>
      <AddStudent />
      <Students />
    </div>
  );
}
