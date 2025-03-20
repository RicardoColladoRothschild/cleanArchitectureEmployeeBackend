import { Person } from "../types/Person";

export interface IEmployeeRepository{
    createEmployee(person: Person): Promise<any>;
    getAllEmployee(userId: string): Promise<any>;
    updateEmployeeDetails(userId: string, person: Person): Promise<Person>;
    deleteEmployee(userId: string): Promise<Person>;
}