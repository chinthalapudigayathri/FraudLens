//import routerfrom express
import { Router } from "express";

//import required 
import { createClaim, getClaimsByPatient } from "../controllers/ClaimCtrl";

//create router object
const router = Router();

//define routes
router.post("/", createClaim);
router.get("/:patientId", getClaimsByPatient);

//export the router
export default router;
