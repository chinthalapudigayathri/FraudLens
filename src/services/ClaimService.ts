// import all entities needed
import Claim from "../entities/Claim";

import { FraudService } from "./FraudService";



// create a service class
//make sure to use export so that it can be imported in other modules
export class ClaimService {

 //we create static async methods here
 //static so that we can call the method directly using ClaimService.method() without creating an instance of the class
 //async because db calls to mongodb takes time, using asyncronous methods allows us to use await keyword inside the method to wait for the db calls to complete before moving on to the next line of code
 
  static async createClaim(data: any) {
    // before cresting claim let's validate the claim using the fraud detection service, we will pass the necessary data to the fraud detection service and it will return whether the claim is valid or not, based on that we will set the fraudFlag in the claim document
    // import fraudservice in first line
    const fraudCheck = FraudService.validateClaim({
    //getting data needed for fraud check from the data object passed to the createClaim method, you can modify this as per your requirements and the data you have in your claim document
      surgeryId: data.surgeryId,
      claimAmount: data.claimAmount,
      surgeryCost: data.surgeryCost
    });

    // creating new claim
    const claim = new Claim({
    // using spread operator to copy all the properties from the data object to the new claim document, this way we don't have to manually set each property, just make sure that the data object has all the necessary properties for the claim document    
      ...data,

     //set the fraud flag based on the result from the fraud detection service, if the claim is valid then fraudFlag will be false, if the claim is not valid then fraudFlag will be true
      fraudFlag: !fraudCheck.valid
    });

    //saving the data
    return await claim.save();
   
}
static async getClaimsByPatient(patientId: string) {
    return await Claim.find({ patientId });
  }
}