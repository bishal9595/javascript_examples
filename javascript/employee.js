function addEmployee()
{
    var employeeId=document.emp.eid.value;
    //var employeeId=document.getElementById('empid').value;
    var employeeName=document.emp.ename.value;
    //var employeeName=document.getElementById('empname').value;
    var ecourse=document.getElementsByName('empcourse');
    var equal=document.getElementById('qualify').value;
    console.log(equal.length);
    console.log(ecourse.length);
    
    for(var i=0;i<ecourse.length;i++){
      alert(ecourse[i].checked+" "+ecourse[i].value);
    }
    
    
if(document.getElementById('eonline').checked){
    var op="Online";
}
else  op="not online";

    alert(employeeId+" "+employeeName+" "+op+" "+equal);
    //alert(employeeId+" "+employeeName)
}