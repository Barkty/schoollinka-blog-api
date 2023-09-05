import { Router, Request, Response } from "express";
import blogRoutes from "./blog"

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    message: `Hello from homepage. Check the API specification for further guidance and next steps.`,
    success: 1,
  });
});

router.use('/blog', blogRoutes)


export default router