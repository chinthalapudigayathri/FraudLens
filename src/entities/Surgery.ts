// importing required modules from mongoose
import { Schema, model, Document } from "mongoose";

//always create an interface for an entity
//use export keyword so that other files can also reuse this interface 
// always extend the interface with Document, it is a typescript interface which has predefined methods
export interface Surgery extends Document {
  surgeryId: string;
  patientId: string;
  type: string; // IC, Non-IC, Care Bundle
  cost: number;
  date: Date;
}

//create a schema to define data structure clearly
// we specify const for schema so that the objects defined in it are not reassigned somewhere by misstake
const surgerySchema = new Schema<Surgery>({
  surgeryId: { type: String, required: true, unique: true },
  patientId: { type: String, required: true },
  type: { type: String, enum: ["IC", "Non-IC", "Care Bundle"], required: true },
  cost: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

//export the entity for reuse
export default model<Surgery>("Surgery", surgerySchema);