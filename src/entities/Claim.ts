//import important modules from mongoose
import { Schema, model, Document } from "mongoose";

//create an interface which has all db columns
//make sure to extend the interface with Document, it is a typescript interface for mongoose
// make sure to export it so that other files can import this interface
export interface Claim extends Document {
  claimId: string;
  patientId: string;
  surgeryId: string;
  claimAmount: number;
  fraudFlag: boolean;
}

//create a schema to define actual daata types
// make them constant so that we are not mistakenly reassinging other vakues
const claimSchema = new Schema<Claim>({
  claimId: { type: String, required: true, unique: true },
  patientId: { type: String, required: true },
  surgeryId: { type: String, required: true },
  claimAmount: { type: Number, required: true },
  fraudFlag: { type: Boolean, default: false }
});

//export the entity for reuse in other parts of the application
export default model<Claim>("Claim", claimSchema);
