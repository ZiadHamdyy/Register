"use server"
import prisma from '../../../prisma/PrismaClient';

export const addSubject = async (SubjectName : string) => {
    try{
        if (!SubjectName)
            return
            
        const subject = await prisma.subject.create({
            data: {
                name: SubjectName
            }
        })
        return subject
    }catch(error){
        console.error(error);
    }
}

export const ListSubjects = async () => {
    try{
        const subject = await prisma.subject.findMany()
        return subject
    }catch(error){
        console.error(error);
    }
}
