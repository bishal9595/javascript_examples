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

/*import {IEmployee} from './Employee';
var emp:IEmployee={empId:1001,empName:"Abcd",empSalary:7000.11,empStatus:true};
console.log(emp);*/

import {IEmployee} from './Employee'
var emp:IEmployee[]=[
    {empId:1001,empName:"Abcd",empSalary:7000.11,empStatus:true},
    {empId:1002,empName:"Abcd",empSalary:7000.11,empStatus:true},
    {empId:1003,empName:"Abcd",empSalary:7000.11,empStatus:true}
];
emp.push({empId:1004,empName:"bcd",empSalary:70000.11,empStatus:true});
emp.splice(1,1);

for(let data of emp)
{
    console.log(data.empId+" "+data.empName+" "+data.empSalary+" "+data.empStatus);
}


