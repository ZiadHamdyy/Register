import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from '../../Redux/Slice/SubjectSlice';
import { ListStudents } from '@/app/Prisma/student';

export default function Students() {
    const [students, setStudents] = useState<any[]>([]);
    const currentSubject = useSelector((state: any) => state.subject.currentSubject);
    const isBarOff = useSelector((state:any) => state.Bars.rightbar);
    
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchStudents() {
            if (currentSubject?.id) {
                try {
                    const fetchedStudents = await ListStudents(currentSubject.id);
                    setStudents(fetchedStudents?.students || []);
                } catch (error) {
                    console.error("Failed to fetch students:", error);
                }
            }
        }

        fetchStudents();
    }, [currentSubject?.id]);

    return (
        <div className="overflow-y-hidden h-[73vh]">
            {students?.map((stu) => (
                <div 
                    className={`h-16 rounded-lg shadow-black shadow-sm ${isBarOff ? "" : "mx-6"} my-2 flex justify-center items-center cursor-pointer hover:bg-slate-200 overflow-hidden whitespace-nowrap text-ellipsis`} 
                    key={stu.id}
                >
                    {stu.name}
                </div>
            ))}
        </div>
    );
}
