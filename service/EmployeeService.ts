import {inject, injectable} from "inversify";
import {IEmployeeService} from "../interfaceContract/IEmployeeService";
import {IEmployeeRepository} from "../interfaceContract/IEmployeeRepository";
import {TYPES} from "../types";
import {Person} from "../models/EmployeeModel";
import { Person, Person } from "../types/Person";

@injectable()
export class EmployeeService implements IEmployeeService{
    constructor(
        @inject(TYPES.EmployeeRepository) private employeeRepository: IEmployeeRepository
    ){}

    async createNewEmployee(person: Person): Promise<Person> {
        return await this.employeeRepository.createEmployee(person);
    }

    async getAllEmployee(): Promise<Person[]>{
        return await this.employeeRepository.getAllEmployee();
    }

    async updateEmployee(employeeId: string, person: Person): Promise<Person> {
        return await this.employeeRepository.updateEmployeeDetails(employeeId, person);
    }

    async deleteEmployee(employeeId: string): Promise<void> {
        return await this.employeeRepository.deleteEmployee(employeeId);
    }
}