import { Person } from "../types/Person";

export interface IEmployeeRepository {
    createEmployee(person: Person): Promise<Person>;
    getAllEmployee(): Promise<Person[]>;
    updateEmployeeDetails(employeeId: string, person: Person): Promise<Person>;
    deleteEmployee(employeeId: string): Promise<void>;
}