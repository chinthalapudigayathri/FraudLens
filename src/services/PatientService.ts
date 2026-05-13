// import all the entites needed
import Patient from "../entities/Patient";

//create a class here to handle all the business logic related to patient
// make sure to use export keyword to make it available for other modules to import
export class PatientService {

    //create all the methods we need inside this class
    // make sure to use static async methods 
    // static so that we can simply call the method by PatientService.method() instead of creating const service = new PatientService(); and doing service.method
    // async because db calls to mongodb takes time, using asyncronous methods allows us to use await keyword inside the method to wait for the db calls to complete before moving on to the next line of code 

    static async createPatient(data: any) {
        // you create a new object for patient only when inserting the data
    const patient = new Patient(data);
    return await patient.save();
  }

  static async getPatientById(patientId: string) {
    return await Patient.findOne({ patientId });
  }

  static async getAllPatients() {
    return await Patient.find();
  }

}