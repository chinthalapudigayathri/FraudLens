import { Request, Response, NextFunction } from "express";
import logger from "../logger/log";

export const requestLogger = (req: Request, _res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`, { body: req.body });
  next();
};
