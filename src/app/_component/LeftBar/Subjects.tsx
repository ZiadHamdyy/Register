import { ListSubjects } from "@/app/Prisma/subject";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../Redux/Slice/SubjectSlice";

export default function Subjects() {
  const [subject, setsubject] = useState<any>(null);
  const currentSubject = useSelector(
    (state: any) => state.subject.currentSubject
  );
  const isBarOff = useSelector((state: any) => state.Bars.leftbar);

  const dispatch = useDispatch();
  useEffect(() => {
    async function list() {
      const subjects = await ListSubjects();
      setsubject(subjects);
    }
    list();
  }, []);

  return (
    <div className="overflow-y-hidden h-[73vh]">
      {subject?.map((sub: any) => {
        return (
          <div
            className={`h-16 rounded-lg shadow-black shadow-sm ${
              isBarOff ? "" : "mx-6"
            } my-2 flex justify-center items-center cursor-pointer hover:bg-slate-200 overflow-hidden whitespace-nowrap text-ellipsis`}
            key={sub.id}
            onClick={() =>
              dispatch(
                setCurrent({ ...sub, createdAt: sub?.createdAt.toISOString() })
              )
            }
          >
            {sub.name}
          </div>
        );
      })}
    </div>
  );
}
