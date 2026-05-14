import { Request, Response, NextFunction } from "express";
import logger from "../logger/log";

export const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  logger.error(err.message, { stack: err.stack });
  res.status(500).json({
    error: err.name,
    message: err.message
  });
};
