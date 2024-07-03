import prisma from "../../shared/prisma";


const createSkill = async (payload: any) => {

    const blog = await prisma.skill.create({
         data: payload,
    })
 return blog
};
const getSkill = async () => {
    const data = await prisma.skill.findMany()
 return data
};

export const SkillService = {
  createSkill,
  getSkill
 
};