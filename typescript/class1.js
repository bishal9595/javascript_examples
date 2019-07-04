"use strict";
/*interface IEmployee
{ empId:number;
    empName:string;
    empSalary:number;
    empStatus:boolean;

}
class Employee implements IEmployee
{
    
    printallEmployee():any{
        console.log(this.empId+" "+this.empName+" "+this.empSalary+" "+this.empStatus);
    }
}*/
/*import {IEmployee} from './Employee';
var emp=new Employee();
emp.empStatus=true;
emp.empSalary=7000.50;
emp.empName="asc";
emp.empId=1001;
emp.printallEmployee();*/
exports.__esModule = true;
var emp = [
    { empId: 1001, empName: "Abcd", empSalary: 7000.11, empStatus: true },
    { empId: 1002, empName: "Abcd", empSalary: 7000.11, empStatus: true },
    { empId: 1003, empName: "Abcd", empSalary: 7000.11, empStatus: true }
];
emp.push({ empId: 1004, empName: "bcd", empSalary: 70000.11, empStatus: true });
emp.splice(1, 1);
for (var _i = 0, emp_1 = emp; _i < emp_1.length; _i++) {
    var data = emp_1[_i];
    console.log(data.empId + " " + data.empName + " " + data.empSalary + " " + data.empStatus);
}
