import { Router } from "express";
import { create, updateComment } from "../controllers/Comment";
import { blogIdSchema, createCommentSchema, idSchema, updateCommentSchema, validator } from "../base/request";

const router = Router()

router.post('/:blogId', validator.params(blogIdSchema), validator.body(createCommentSchema), create)
router.patch('/:id', validator.params(idSchema), validator.body(updateCommentSchema), updateComment)

export default router