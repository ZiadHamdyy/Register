"use client";
import React, { useEffect, useState } from 'react'
import StartSession from './StartSession';
import { useSelector } from 'react-redux';
import Session from './Session';


export default function Center() {
    const [centerSize, setCenterSize] = useState("w-[70%]");
    const isleftBarOff = useSelector((state: any) => state.Bars.leftbar);
    const isrightBarOff = useSelector((state: any) => state.Bars.rightbar);
    
    const [showSession, setShowSession] = useState(false);

    useEffect(() => {
        if (!isleftBarOff && !isrightBarOff) {
          setCenterSize("w-[50%]");
        }
        else if (isleftBarOff && isrightBarOff) {
          setCenterSize("w-[90%]");
        }
        else if (!isleftBarOff || !isrightBarOff) {
          setCenterSize("w-[70%]");
        }else{
            setCenterSize("w-[70%]");
        }
      }, [!isleftBarOff, !isrightBarOff]);
  return (
    <div className={`${centerSize} h-lvh transition-all duration-300 ease-in-out`}>
      <StartSession showSession={showSession} setShowSession={setShowSession}/>
      <Session showSession={showSession} setShowSession={setShowSession}/>
    </div>
  )
}
