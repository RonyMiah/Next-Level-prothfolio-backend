import prisma from "../../shared/prisma";


const createProject = async (payload: any) => {

    const project = await prisma.project.create({
         data: payload,
    })
 return project
};

export const ProjectService = {
  createProject,
 
};