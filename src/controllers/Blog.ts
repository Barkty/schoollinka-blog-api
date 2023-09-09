import { Request, Response } from "express"
import { error, success } from "../helpers/response"
import BlogRepository from "../repository/Blog.service"
import asyncWrapper from "../middlewares/async"

const blogRepository = new BlogRepository()

export const getBlogs = asyncWrapper(async (req: Request, res: Response) => {
    try {

        const { query: { page, limit, title } } = req

        const blogs = await blogRepository.findAll(Number(page), Number(limit), String(title))

        return success(res, 200, blogs)
    } catch (e) {
        return error(res, 500, e)
    }
})

export const getBlog = asyncWrapper(async (req: Request, res: Response) => {
    try {
        const { params: { id } } = req

        const blog = await blogRepository.findOne(id)

        return success(res, 200, blog)
    } catch (e) {
        return error(res, 500, e)
    }
})

export const createBlog = asyncWrapper(async (req: Request, res: Response) => {
    try {
        const { body } = req
        
        const blog = await blogRepository.create(body)

        return success(res, 201, blog)
    } catch (e) {
        return error(res, 500, e)
    }
})

export const updateBlog = asyncWrapper(async (req: Request, res: Response) => {
    try {
        const { params: { id }, body } = req

        const blog = await blogRepository.updateOne(Number(id), body)

        return success(res, 200, blog)

    } catch (e) {
        return error(res, 500, e)
    }
})

export const deleteBlog = asyncWrapper(async (req: Request, res: Response) => {
    try {
        const { params: { id } } = req

        const blog = await blogRepository.removeOne(Number(id))

        return success(res, 200, blog)

    } catch (e) {
        return error(res, 500, e)
    }
})