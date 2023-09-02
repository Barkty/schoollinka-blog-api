import { Response } from "express";
/**
 *
 */
const error = (res: Response, code: number, err: any) => {
    const message = err.message || err;
    return res.status(code).json({
        success: 0,
        message: message.includes("E11000") ? "Duplicate Error: Record Exists" : message
    });
};

const success = (res: Response, code: number, data: any) => res.status(code).send({
        success: 1,
        message: "Successful",
        data
    });

export { error, success };