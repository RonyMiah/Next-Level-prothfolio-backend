import prisma from "../../shared/prisma";


const createBlog = async (payload: any) => {
    const blog = await prisma.blog.create({
         data: payload,
    })
 return blog
};
const getBlog = async () => {
    const data = await prisma.blog.findMany()
 return data
};

export const BlogService = {
  createBlog,
  getBlog
 
};