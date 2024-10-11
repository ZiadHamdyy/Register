"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import plus from "../../plus.png";
import { addStudent } from "@/app/Prisma/student";
import { useDispatch, useSelector } from "react-redux";
import { setrightbaroff } from "@/app/Redux/Slice/BarsSlice";

export default function AddStudent() {
  const [showOpen, setShowOpen] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>("");
  const currentSubject = useSelector(
    (state: any) => state.subject.currentSubject
  );
  const isBarOff = useSelector((state: any) => state.Bars.rightbar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isBarOff) {
      setShowOpen(false);
    }
  }, [isBarOff]);

  const handleAdd = async () => {
    const student = await addStudent(currentSubject?.id, studentName);
    if (student) setShowOpen(false);
    return;
  };
  return (
    <div className="relative">
      <div
        className={`hover:bg-slate-200 h-16 cursor-pointer shadow-sm shadow-black rounded-lg ${
          isBarOff ? "" : "mx-6"
        } my-6 flex justify-center items-center space-x-2 px-4`}
        onClick={() => {
          setShowOpen(true);
          dispatch(setrightbaroff());
        }}
      >
        <Image
          src={plus}
          alt="Menu icon"
          width={25}
          className="cursor-pointer hover:bg-slate-200 rounded-md"
        />
        {!isBarOff && <span className="font-medium">Add Student</span>}
      </div>

      <div
        className={`absolute z-10 h-auto p-[1.84rem] rounded-lg shadow-sm shadow-black bg-white mx-6 transition-all duration-500 ${
          showOpen
            ? "translate-y-10 opacity-100"
            : "translate-y-0 opacity-0 pointer-events-none"
        }`}
        style={{ top: "70%" }}
      >
        <div className="mb-4">
          <input
            type="text"
            id="student-name"
            name="student-name"
            placeholder="Enter student name"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setStudentName(e.target.value)}
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
            onClick={handleAdd}
          >
            Open student
          </button>
        </div>
      </div>
      {!isBarOff && (
        <div className="relative flex items-center">
          <div className="flex-grow h-[1px] bg-black"></div>
          <span className="px-3 bg-white font-semibold">Students</span>
          <div className="flex-grow h-[1px] bg-black"></div>
        </div>
      )}
    </div>
  );
}
