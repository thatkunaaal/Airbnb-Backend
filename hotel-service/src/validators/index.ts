import { NextFunction, Request, Response } from "express";
import {ZodObject} from "zod";
import { AppError } from "../utils/errors/error";
import { StatusCodes } from "http-status-codes";

export const validateBody = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);

      next();
    } catch (error) {

      throw new AppError(StatusCodes.BAD_REQUEST,"Bad Request");

      // return res.status(400).json({
      //   error: "Bad Request",
      // });

    }
  };
};
