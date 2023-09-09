import { Router, Request, Response } from "express";
import blogRoutes from "./blog"
import commentRoutes from './comment'

const router = Router();

const home = async (req: Request, res: Response) => {
  res.status(200).send({
    message: `Hello from homepage. Check the API specification for further guidance and next steps.`,
    success: 1,
  });
}

router.get("/", home);

router.use('/blog', blogRoutes)
router.use('/comment', commentRoutes)

export default router