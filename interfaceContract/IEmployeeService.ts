import { Person } from "../types/Person";

export interface IEmployeeService{
    createNewEmployee(person: Person, userId: string): Promise<any>;
  getAllEmployeeo(employeeId: string): Promise<any>;
  updateEmployee( userId: string, person: Person): Promise<Person>;
  deleteEmployee(employeeId: string): Promise<any>;
}