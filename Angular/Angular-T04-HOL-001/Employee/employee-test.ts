import { Department } from './department';
import { Employee } from './employee';
import { Skills } from './skills';

class EmployeeTest {

  employee: Employee = {
    id: undefined,
    name: undefined,
    salary: undefined,
    permanent: undefined,
    department: undefined,
    skills: undefined
  }

  constructor(id?: number,
    name?: string,
    salary?: number,
    permanent?: boolean,
    department?: Department,
    skills?: Skills[]) {

    console.log("hello world");

    this.employee.id = id;
    this.employee.name = name;
    this.employee.salary = salary;
    this.employee.permanent = permanent;
    this.employee.department = department;
    this.employee.skills = skills;
  }

  display(): void {
    console.log("ID: " + this.employee.id);
    console.log("Name: " + this.employee.name);
    console.log("Salary: " + this.employee.salary);
    console.log("Permanent: " + this.employee.permanent);
    console.log("Department id: " + this.employee.department.id);
    console.log("Department name: " + this.employee.department.name);
    let skills = this.employee.skills;
    for (var _i = 0; _i < skills.length; _i++) {
      let skill: Skills = skills[_i];
      console.log("skill[" + _i + "]:" + skill.id + ", " + skill.name);
    }

  }

}
let employeetest = new EmployeeTest(3,
  "John",
  10000, true, { id: 1, name: "Payroll" },  [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS"
    },
    {
      id: 3,
      name: "JavaScript"
    }
  ]
);
employeetest.display();