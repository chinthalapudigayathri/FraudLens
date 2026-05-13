// import all entities needed
import Surgery from "../entities/Surgery";

//create a service class
//make sure to use export so that it can be imported in other modules
export class SurgeryService {

    //create methods here
    //make sure to use static async methods
    //static so that we can call the method directly using SurgeryService.method() without creating an instance of the class
    //async because db calls to mongodb takes time, using asyncronous methods allows us to use await keyword inside the method to wait for the db calls to complete before moving on to the next line of code

    static async createSurgery(data: any) {
    //we create a new entitiy object only while inserting the data, for other operations like find, update, delete we can directly call the methods on the entity class without creating an object
    const surgery = new Surgery(data);
    return await surgery.save();
  }
  
  static async getSurgeriesByPatient(patientId: string) {
    return await Surgery.find({ patientId });
  }
}