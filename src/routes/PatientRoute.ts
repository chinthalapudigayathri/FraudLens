//import router from express
import { Router } from "express";

//import all the functions from the required controllers
import { createPatient, getPatient, getAllPatients } from "../controllers/PatientCtrl";

//create a router object
const router = Router();

//define the routes for the patient resource
router.post("/", createPatient);
router.get("/:id", getPatient);
router.get("/", getAllPatients);

//export the router
export default router;