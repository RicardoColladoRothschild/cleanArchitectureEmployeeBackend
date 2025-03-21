import mongoose, {Schema, Document} from "mongoose";

export interface Person extends Document{
    name:string;
    lastName:string;
    employeeId:string;
    hasInsurance:boolean;
}

const EmployeeSchema: Schema = new Schema({
    name:{type: String, required: true},
    lastName: {type: String, required: true},
    employeeId: {type: String, required: true, unique: true},
    hasInsurance: {type: Boolean, default: false},
});

export const EmployeeModel = mongoose.model<Person>("Employee", EmployeeSchema)