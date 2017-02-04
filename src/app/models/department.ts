import { Employee } from './employee';

export class Department {
    id: number;
    name: string;
    employees: Employee[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }

    static create(data) {
        let newDepartment = new Department(data.id, data.name);
        for (var index = 0; index < data.employees.length; index++) {
            var element = data.employees[index];
            newDepartment.addEmployee(element);
        }
        return newDepartment;
    }

    addEmployee(data) {
        let newEmployee = new Employee(data.id, data.name, data.email, data.image);
        this.employees.push(newEmployee);
    }
}