//import router from express and the controller functions
import { Router } from "express";
import { createSurgery, getSurgeriesByPatient } from "../controllers/SurgeryCtrl";

//create router object
const router = Router();

//define routes
router.post("/", createSurgery);
router.get("/:patientId", getSurgeriesByPatient);

//export the router
export default router;
