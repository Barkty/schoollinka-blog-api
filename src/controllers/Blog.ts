import { Request, Response } from "express"
import { error, success } from "../helpers/response"
import BlogRepository from "../services/Blog.service"

const blogRepository = new BlogRepository()

export const getBlogs = async (req: Request, res: Response) => {
    try {

        const { query: { page, limit, blog } } = req

        const blogs = await blogRepository.findAll(Number(page), Number(limit))

        return success(res, 200, blogs)
    } catch (e) {
        return error(res, 500, e)
    }
}