import { NextFunction, Request, Response } from "express";
import { logger } from "../config/logger.config";

export function pingController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  logger.info("Pong route is completed", {
    correaltionId: req.headers["correlation-id"],
  });

  return res.status(200).json({
    success: true,
    message: "Server is healthy & live",
    dat: "pong",
  });
}
