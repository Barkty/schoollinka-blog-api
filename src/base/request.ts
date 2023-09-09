import { createValidator } from 'express-joi-validation'
import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import asyncWrapper from '../middlewares/async'
import { error } from '../helpers/response'

export const validator = createValidator()

export const idSchema = Joi.object({
    id: Joi.string().required()
})

export const blogIdSchema = Joi.object({
    blogId: Joi.number().required()
})

export const fetchSchema = Joi.object({
    page: Joi.number().required(),
    limit: Joi.number(),
    title: Joi.string()
})

export const createSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    likes: Joi.number(),
    avatar: Joi.any()
})

export const createCommentSchema = Joi.object({
    content: Joi.string().required(),
})

export const updateCommentSchema = Joi.object({
    content: Joi.string(),
    likes: Joi.number()
})

export const validateCreateBlog = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body, files } = req
        let avatar: string[] = []
        
        if (files) {
            files.map((file: any) => {
                const { path } = file
                avatar.push(path)
            })
            body.avatar = avatar
        }

        return next()
    } catch (e) {
        return error(res, 500, e)
    }
})