import { Person } from "../types/Person";

export interface IEmployeeService {
    createNewEmployee(person: Person): Promise<Person>;
    getAllEmployee(): Promise<Person[]>;
    updateEmployee(employeeId: string, person: Person): Promise<Person>;
    deleteEmployee(employeeId: string): Promise<void>;
}