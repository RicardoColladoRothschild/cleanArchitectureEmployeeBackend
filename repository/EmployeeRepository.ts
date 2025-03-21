import {injectable} from "inversify";
import { IEmployeeRepository } from "../interfaceContract/IEmployeeRepository";
// import { Person } from "../types/Person";
import {EmployeeModel, Person} from "./models/EmployeeModels";



@injectable()
export class EmployeeRepository implements IEmployeeRepository{
    async createEmployee(person: Person): Promise<Person> {
        return await EmployeeModel.create(person);
    }


    async getAllEmployee(): Promise<Person[]> {
        return await EmployeeModel.find();
    }

  
    async updateEmployeeDetails(employeeId: string, person: Partial<Person>): Promise<Person | null> {
        return await EmployeeModel.findOneAndUpdate({ employeeId }, person, { new: true });
    }

    async deleteEmployee(employeeId: string): Promise<Person | null> {
        return await EmployeeModel.findOneAndDelete({ employeeId });
    }
}