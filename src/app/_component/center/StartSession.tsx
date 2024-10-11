import React, { useEffect, useState } from "react";
import Image from "next/image";
import plus from "../../plus.png";

interface StartSessionProps {
    showSession: boolean;
  setShowSession: (show: boolean) => void;
}

export default function StartSession({ showSession, setShowSession }: StartSessionProps) {
  const [showOpen, setShowOpen] = useState<boolean>(false);
  const [sessionDuration, setSessionDuration] = useState<string>("");

  const startSession = () => {
    if (sessionDuration === "") {
      return;
    }
    setShowSession(true);
    setShowOpen(false);
  }
    
  return (
    <div className="relative">

    {!showSession && (
      <div
        className={`hover:bg-slate-200 h-16 cursor-pointer shadow-sm shadow-black rounded-lg mx-6 mt-6 flex justify-center items-center space-x-2 px-4`}
        onClick={() => setShowOpen(true)}
      >
        <Image
          src={plus}
          alt="Menu icon"
          width={27}
          className="cursor-pointer hover:bg-slate-200 rounded-md"
        />
    <span className="font-medium">Start Session</span>

      </div>)}

      <div
        className={`absolute z-10 w-[100% - 1.5rem] m-6 h-auto p-[1.84rem] rounded-lg shadow-sm shadow-black bg-white transition-all duration-500 ${
          showOpen
            ? "translate-y-10 opacity-100"
            : "translate-y-0 opacity-0 pointer-events-none"
        }`}
        style={{ top: "10%", width: "calc(100% - 3rem)" }}
      >
        <div className="mb-4">
          <input
            type="text"
            id="item-name"
            name="item-name"
            placeholder="session duration"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setSessionDuration(e.target.value)}
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-all"
            onClick={() => setShowOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
            onClick={startSession}
          >
            Start session
          </button>
        </div>
      </div>
      {!showSession && (
      <div className="relative flex items-center mt-2">
        <div className="flex-grow h-[1px] bg-black"></div>
        <span className="px-3 bg-white font-semibold">Subjects</span>
        <div className="flex-grow h-[1px] bg-black"></div>
      </div>)}
    </div>
  );
}
