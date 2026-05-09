import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/error";


export const genricErrorHandler = (err:AppError,req:Request,res:Response,next:NextFunction  ) => {

    return res.status(err.statusCode).json({
        message: err.explanation,
        success: false
    })
}

