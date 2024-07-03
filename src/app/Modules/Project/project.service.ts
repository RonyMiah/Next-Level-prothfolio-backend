import prisma from "../../shared/prisma";


const createProject = async (payload: any) => {

    const project = await prisma.project.create({
         data: payload,
    })
 return project
};
const getProject = async () => {

    const data = await prisma.project.findMany()
    return data
};

export const ProjectService = {
  createProject,
  getProject
 
};