import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/error";
import { ErrorResponse } from "../utils/common/response.util";


export const genricErrorHandler = (err:AppError,req:Request,res:Response,next:NextFunction  ) => {

    ErrorResponse.error = err;
    ErrorResponse.message = err.explanation;


    return res.status(err.statusCode).json(ErrorResponse);
}

