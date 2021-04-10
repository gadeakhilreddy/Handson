"use strict";
exports.__esModule = true;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(id, name, salary, permanent, department, skills) {
        this.employee = {
            id: undefined,
            name: undefined,
            salary: undefined,
            permanent: undefined,
            department: undefined,
            skills: undefined
        };
        console.log("hello world");
        this.employee.id = id;
        this.employee.name = name;
        this.employee.salary = salary;
        this.employee.permanent = permanent;
        this.employee.department = department;
        this.employee.skills = skills;
    }
    EmployeeTest.prototype.display = function () {
        console.log("ID: " + this.employee.id);
        console.log("Name: " + this.employee.name);
        console.log("Salary: " + this.employee.salary);
        console.log("Permanent: " + this.employee.permanent);
        console.log("Department id: " + this.employee.department.id);
        console.log("Department name: " + this.employee.department.name);
        var skills = this.employee.skills;
        for (var _i = 0; _i < skills.length; _i++) {
            var skill = skills[_i];
            console.log("skill[" + _i + "]:" + skill.id + ", " + skill.name);
        }
    };
    return EmployeeTest;
}());
var employeetest = new EmployeeTest(101, "Raj Patel", 10000, true, { id: 1001, name: "cse" }, [
    {
        id: 1,
        name: "HTML"
    },
    {
        id: 2,
        name: "CSS"
    },
    {
        id: 3,
        name: "JavaScript"
    }
]);
employeetest.display();
