//import router from express
import { Router } from "express";

//import required functions from the controller
import { createBenefit, getBenefitByType, getAllBenefits } from "../controllers/BenefitCtrl";

//create router object
const router = Router();

//define routes
router.post("/", createBenefit);
router.get("/:type", getBenefitByType);
router.get("/", getAllBenefits);

//export the router
export default router;
