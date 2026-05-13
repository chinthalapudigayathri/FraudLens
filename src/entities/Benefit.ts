// import important modules from mongoose
import { Schema, model, Document } from "mongoose";

//create an interface to define fields in db
// make sure to extend the interface with document, it is a typescript interface with predefined methods
// make sure to export the interface so that other files can import it
export interface Benefit extends Document {
  benefitId: string;
  surgeryType: string; // IC, Non-IC, Care Bundle
  description: string;
}

//create a schema to define data types clearly
//assing it to a constant so that we are not mistakenly reassigning other values
const benefitSchema = new Schema<Benefit>({
  benefitId: { type: String, required: true, unique: true },
  surgeryType: { type: String, enum: ["IC", "Non-IC", "Care Bundle"], required: true },
  description: { type: String, required: true }
});

//export the entity for reuse in other parts of the application
export default model<Benefit>("Benefit", benefitSchema);
