"use client";
import Image from "next/image";
import menu from "../../menu.png";
import arrow from "../../down-arrow.png";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { setrightbar } from "@/app/Redux/Slice/BarsSlice";

interface LeftTopBarProps {
  isBarOff: boolean;
  setIsBarOff: (value: boolean) => void;
}

export default function RightTopBar() {
  const { data: session } = useSession();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const currentSubject = useSelector((state: any) => state.subject.currentSubject);
  const isBarOff = useSelector((state:any) => state.Bars.rightbar);
    const dispatch = useDispatch()

  const toggleBar = () => {
    dispatch(setrightbar())
    setIsProfileOpen(false);
  };
  return (

      <div className="shadow-sm shadow-black rounded-b-lg rounded-l-lg w-full h-16 flex items-center justify-between">
        {!isBarOff && (
          <div className="flex justify-center items-center ml-3">
            {currentSubject?.name}  
          </div>
        )}
        <Image
          src={menu}
          alt="Menu icon"
          className="relative max-w-10 min-w-7 cursor-pointer hover:bg-slate-200 rounded-md mx-3"
          onClick={toggleBar}
        />
      </div>
  );
}
