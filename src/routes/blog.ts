import { Router } from "express";
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from "../controllers/Blog";
import { createSchema, fetchSchema, idSchema, validateCreateBlog, validator } from '../base/request'
import { uploadImage } from "../services/storage";

const router = Router();

router.post('/', uploadImage.array('avatar'), validator.body(createSchema), validateCreateBlog, createBlog)
router.get('/', validator.query(fetchSchema), getBlogs)
router.get('/:id', validator.params(idSchema), getBlog)
router.patch('/:id', uploadImage.array('avatar'), validator.params(idSchema), validator.body(createSchema), validateCreateBlog, updateBlog)
router.delete('/:id', validator.params(idSchema), deleteBlog)

export default router