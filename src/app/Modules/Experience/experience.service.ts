import prisma from "../../shared/prisma";


const createExperience = async (payload: any) => {

    const blog = await prisma.experince.create({
         data: payload,
    })
 return blog
};
const getExperience = async () => {
    const data = await prisma.experince.findMany()
    
   return data
};

export const ExperienceService = {
  createExperience,
  getExperience
 
};