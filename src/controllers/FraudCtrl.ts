//import request and response from express
import { Request, Response } from "express";

//import all required services for business logic
import { FraudService } from "../services/FraudService";

//create Arrow Functions
//using export for reusability
//const so that we don't reassign mistakenly
//async because it tells the function to wait for the promise to resolve before moving on, which is important when dealing with asynchronous operations like database calls or API requests.       
//await to tell api to wait for response    
export const checkFraud = async (req: Request, res: Response) => {
  const { surgeryId, claimAmount, surgeryCost } = req.body;

  const result = FraudService.validateClaim({ surgeryId, claimAmount, surgeryCost });

  res.json(result);
};
