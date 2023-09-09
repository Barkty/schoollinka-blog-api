import { NextFunction, Request, Response } from "express";

/**
 * 
 * @param {*} fn 
 * @returns 
 */
const asyncWrapper = (fn: (req: Request, res: Response, next: NextFunction) => {}) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default asyncWrapper;