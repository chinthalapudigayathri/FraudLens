//import request and response from express
import { Request, Response } from "express";

//import all required services for business logic
import { BenefitService } from "../services/BenefitService";

//create arrow functions without classes for controller
//using export for reusability
//const so that we don't reassign mistakenly
//async because it tells the function to wait for the promise to resolve before moving on, which is important when dealing with asynchronous operations like database calls or API requests.       
//await to tell api to wait for response    
export const createBenefit = async (req: Request, res: Response) => {
  const benefit = await BenefitService.createBenefit(req.body);
  res.json(benefit);
};

export const getBenefitByType = async (req: Request, res: Response) => {
  const benefit = await BenefitService.getBenefitByType(req.params.type);
  res.json(benefit);
};

export const getAllBenefits = async (_req: Request, res: Response) => {
  const benefits = await BenefitService.getAllBenefits();
  res.json(benefits);
};
