import { NextFunction, Request, Response } from "express";
import {v4 as uuidv4} from "uuid";


const attachCorelationId = (req:Request,res:Response,next:NextFunction) => {
    try {
        // setting Coorelation id for every request.
        req.headers['correlation-id'] = uuidv4();

        next();
    } catch (error) {
        
    }
}

export {attachCorelationId};