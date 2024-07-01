import prisma from "../../shared/prisma";


const createBlog = async (payload: any) => {

    const blog = await prisma.blog.create({
         data: payload,
    })
 return blog
};

export const BlogService = {
  createBlog,
 
};