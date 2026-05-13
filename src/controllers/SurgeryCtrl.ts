//import request and response from express
import { Request, Response } from "express";

// import services for business logic
import { SurgeryService } from "../services/SurgeryService";

//create arrow functions without class for controller
//using export for reusability
// const so that we don't reassign mistakenly
// async because it tells the function to wait for the promise to resolve before moving on, which is important when dealing with asynchronous operations like database calls or API requests.       
// await to tell api to wait for response


export const createSurgery = async (req: Request, res: Response) => {
  const surgery = await SurgeryService.createSurgery(req.body);
  res.json(surgery);
};

export const getSurgeriesByPatient = async (req: Request, res: Response) => {
  const surgeries = await SurgeryService.getSurgeriesByPatient(req.params.patientId);
  res.json(surgeries);
};