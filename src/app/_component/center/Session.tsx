import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import plus from "../../plus.png";
import { useDispatch } from "react-redux";
import {
  setleftbaron,
  setrightbaron,
} from "@/app/Redux/Slice/BarsSlice";

interface SessionProps {
  showSession: boolean;
  setShowSession: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Session({ showSession, setShowSession }: SessionProps) {
  const [showOpen, setShowOpen] = useState<boolean>(false);
  const [sessionDuration, setSessionDuration] = useState<string>("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (showSession) {
      setShowOpen(true);
      dispatch(setleftbaron());
      dispatch(setrightbaron());
    }
  }, [showSession]);

  const EndSession = () => {
    setShowOpen(false);
    setShowSession(false);
  }
  return (
    <div className="relative">
      <div
        className={`absolute z-10 w-[100% - 1.5rem] mx-6 h-auto p-[1.84rem] rounded-lg shadow-sm shadow-black bg-white transition-all duration-500 ${
          showOpen
            ? "translate-y-10 opacity-100"
            : "translate-y-0 opacity-0 pointer-events-none"
        }`}
        style={{ top: "10%", width: "calc(100% - 3rem)" }}
      >
        <div className="">timer</div>
        <div className="flex flex-col justify-center items-center space-y-4 p-6">
          <div className="w-72 h-72 bg-slate-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">QR Code</span>
          </div>
          <div className="text-gray-700 font-semibold text-xl">
            Scan QR or type the code
          </div>
          <div className="text-2xl font-bold text-gray-900 tracking-wider">
            231452345
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
            onClick={EndSession}
          >
            End session
          </button>
        </div>
      </div>
    </div>
  );
}
