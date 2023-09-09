import { Request, Response } from "express";
import asyncWrapper from "../middlewares/async";
import CommentRepository from "../repository/Comment.service";
import { error, success } from "../helpers/response";

const commentRepository = new CommentRepository()

export const create = asyncWrapper(async (req: Request, res: Response) => {
    try {
        const { body, params: { blogId } } = req

        const comment = await commentRepository.create(Number(blogId), body)

        return success(res, 201, comment)
    } catch (e) {
        return error(res, 500, e)
    }
})

export const updateComment = asyncWrapper(async (req: Request, res: Response) => {
    try {
        const { params: { id }, body } = req

        const comment = await commentRepository.updateOne(Number(id), body)
        console.log('COM:: ', comment)

        return success(res, 200, comment)
    } catch (e) {
        return error(res, 500, e)
    }
})