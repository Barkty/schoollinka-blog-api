import { Router } from "express";
import { getBlogs } from "../controllers/Blog";

const router = Router();

router.get('/', getBlogs)

export default router