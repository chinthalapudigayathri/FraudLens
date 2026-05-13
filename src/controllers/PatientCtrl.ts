// import request and response from express
import { Request, Response } from "express";

// import patient service for business logic
import { PatientService } from "../services/PatientService";

//in Express + Node.js + TypeScript, it is completely normal and very common to create functions without classes, especially for controllers.
// we use arrow functions to define our controller functions, and we export them directly without wrapping them in a class. 
//This approach is often more concise and easier to read, especially for simple controllers that don't require complex state management or inheritance.

//using export for reusability
// const so that we don't reassign mistakenly
// async because it tells the function to wait for the promise to resolve before moving on, which is important when dealing with asynchronous operations like database calls or API requests.
export const createPatient = async (req: Request, res: Response) => {
  const patient = await PatientService.createPatient(req.body);
  res.json(patient);
};

export const getPatient = async (req: Request, res: Response) => {
  const patient = await PatientService.getPatientById(req.params.id);
  res.json(patient);
};

export const getAllPatients = async (_req: Request, res: Response) => {
  const patients = await PatientService.getAllPatients();
  res.json(patients);
};


