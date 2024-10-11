"use server"

import prisma from '../../../prisma/PrismaClient';

export const addStudent = async (subjectId: string, studentName: string) => {
    try{
        if (!studentName || !subjectId)
            return
            
        const newStudent = await prisma.student.create({
            data: {
              name: studentName,
              subjects: {
                connect: {
                  id: subjectId,
                },
              },
            },
          });
        return newStudent
    }catch(error){
        console.error(error);
    }
}

export const ListStudents = async (subjectId: string) => {
    try{
        if (!subjectId)
            return
        console.log(subjectId);
        
        const student = await prisma.subject.findUnique({
            where: { id: subjectId },
            include: { students: true },
          });
          console.log(student);
          
        return student
    }catch(error){
        console.error(error);
    }
}