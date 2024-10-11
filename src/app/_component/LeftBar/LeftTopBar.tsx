"use client";
import Image from "next/image";
import menu from "../../menu.png";
import arrow from "../../down-arrow.png";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { setleftbar } from "@/app/Redux/Slice/BarsSlice";
import { useDispatch, useSelector } from "react-redux";

interface LeftTopBarProps {
  isBarOff: boolean;
  setIsBarOff: (value: boolean) => void;
}

export default function LeftTopBar() {
  const { data: session } = useSession();
  const isBarOff = useSelector((state:any) => state.Bars.leftbar);

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dispatch = useDispatch()

  const toggleBar = () => {
    dispatch(setleftbar())
    setIsProfileOpen(false);
  };

  const name = session?.user?.name;
  const email = session?.user?.email;
  const src = session?.user?.image;

  return (

      <div className="shadow-sm shadow-black rounded-b-lg rounded-r-lg w-full h-16 flex items-center justify-between">
        <Image
          src={menu}
          alt="Menu icon"
          className="relative max-w-10 min-w-7 cursor-pointer hover:bg-slate-200 rounded-md ml-3"
          onClick={toggleBar}
        />
        {!isBarOff && (
          <div className="flex justify-center items-center mr-3">
            <div className="m-2 overflow-hidden whitespace-nowrap text-ellipsis">{name}</div>
            <div className="">
            <Image
              src={arrow}
              alt="arrow icon"
              width={20}
              className="cursor-pointer hover:bg-slate-200 rounded-md mr-3"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
            {isProfileOpen && <div className="absolute z-10 w-auto ml-[-110px] mt-3 bg-white border border-gray-200 rounded-md shadow-lg">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {email}
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => signOut()}>
                  Sign out
                </a>
              </div>
            </div>}
            </div>
            <div className="w-12 h-12 p-1 hover:bg-slate-200 rounded-full flex items-center justify-center overflow-hidden text-xl text-gray-700 uppercase">
              {src ? (
                <img
                  src={src}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span>{name?.[0]?.toUpperCase() || "('-')"}</span>
              )}
            </div>
          </div>
        )}
      </div>
  );
}
