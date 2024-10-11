"use client";
import React, { use } from "react";
import { useSelector } from "react-redux";
import LeftBar from "./_component/LeftBar";
import Center from "./_component/center";
import RightBar from "./_component/RightBar";

export default function PageClient() {
  const currentSubject = useSelector(
    (state: any) => state.subject.currentSubject
  );

  return (
    <div className="flex">
      <LeftBar />
      {currentSubject ? (
        <>
          <Center />
          <RightBar />
        </>
      ) : <></>}
    </div>
  );
}
