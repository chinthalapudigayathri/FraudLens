//import request and response from Express
import { Request, Response } from "express";

//import all required services for business logic
import { ClaimService } from "../services/ClaimService";

//create Arrow Functions
//using export for reusability
//const so that we don't reassign mistakenly
//async because it tells the function to wait for the promise to resolve before moving on, which is important when dealing with asynchronous operations like database calls or API requests.       
//await to tell api to wait for response    
export const createClaim = async (req: Request, res: Response) => {
  const claim = await ClaimService.createClaim(req.body);
  res.json(claim);
};

export const getClaimsByPatient = async (req: Request, res: Response) => {
  const claims = await ClaimService.getClaimsByPatient(req.params.patientId);
  res.json(claims);
};
