// import required entities
import Benefit from "../entities/Benefit";

//create a class to handle business logic
//make sure to use export keyword to make it available for other modules to import
export class BenefitService {

    // create all methods here
    // make sure the methods are static and async
    // static so that we can call the method directly using BenefitService.method() without creating an instance of the class
    // async because db calls to mongodb takes time, using asyncronous methods allows us to use await keyword inside the method to wait for the db calls to complete before moving on to the next line of code
  static async createBenefit(data: any) {
    // create const entitiy object only for inserts
    const benefit = new Benefit(data);
    return await benefit.save();
  }

  static async getBenefitByType(surgeryType: string) {
    return await Benefit.findOne({ surgeryType });
  }

  static async getAllBenefits() {
    return await Benefit.find();
  }
}
