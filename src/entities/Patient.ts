//import from mongoose
import { Schema, model, Document } from "mongoose";

/* entities that connect with mongodb must extend Document
Document is a typescrpt interface provided by mongoose which includes predefined methods */

/*We create an interface instead of a class because we do not want a logic it's just a blueprint for our database structure*/
//use export keyword so that other files can also reuse this interface 
export interface Patient extends Document {
  patientId: string;
  memberId: string;
  name: string;
  age: number;
  gender: string;
}

/* We create a schema to tell our code what data types are allowed, whether it is null etc */
// we specify const for schema so that the objects defined in it are not reassigned somewhere by misstake
const patientSchema = new Schema<Patient>({
  patientId: { type: String, required: true, unique: true },
  memberId: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String }
});

// we export the model to use it in other parts of our application
export default model<Patient>("Patient", patientSchema);