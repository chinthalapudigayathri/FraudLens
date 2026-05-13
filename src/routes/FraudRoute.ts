//import router from express
import { Router } from "express";

//import all the functions from the required controllers
import { checkFraud } from "../controllers/FraudCtrl";

//create a router object
const router = Router();

//define the routes for the fraud resource
router.post("/check", checkFraud);

//export the router
export default router;
