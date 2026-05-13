//this file to map all routes to the main app

//import router from express
import { Router } from "express";

//import all other routers
import patientRoutes from "./PatientRoute";
import surgeryRoutes from "./SurgeryRoute";
import claimRoutes from "./ClaimRoute";
import benefitRoutes from "./BenefitRoute";
import fraudRoutes from "./FraudRoute";

const router = Router();

router.use("/patients", patientRoutes);
router.use("/surgeries", surgeryRoutes);
router.use("/claims", claimRoutes);
router.use("/benefits", benefitRoutes);
router.use("/fraud", fraudRoutes);

export default router;
