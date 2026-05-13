// create a class to handle business logic
// make sure it is export so that we can import this in other files
export class FraudService {
  // we will create a static method so that we can directly call it with FraudService.validateClaim() without creating an instance of the class
  // this is not async because it is not interacting with data  
  static validateClaim(claim: { surgeryId: string; claimAmount: number; surgeryCost: number }) {
   // addimg logic to validate 
   // if claim amout is more than surgery cost it gives false
    if (claim.claimAmount > claim.surgeryCost) {
      return { valid: false, reason: "Claim exceeds surgery cost" };
    }
    // orelse true
    return { valid: true };
  }
}
