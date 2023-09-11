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
    } catch (e: any) {
        return error(res, e?.statusCode || 500, e)
    }
})

export const updateComment = asyncWrapper(async (req: Request, res: Response) => {
    try {
        const { params: { id }, body } = req

        const comment = await commentRepository.updateOne(Number(id), body)

        return success(res, 202, comment)
    } catch (e: any) {
        return error(res, e?.statusCode || 500, e)
    }
})