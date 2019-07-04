/*function getName():string{
    return "Capgemini";
}
let ename:string=getName();
console.log(ename);*/
/*function addNumber(num1,num2):number{
    return num1+num2;
}
let sum:number=addNumber(10,20);
console.log(sum);*/
/*var sum=(num1,num2)=>{ return num1+num2;}
var s=sum(10,20);
console.log(s);*/
function addNumber() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, num_1 = num; _a < num_1.length; _a++) {
        var data = num_1[_a];
        console.log(data);
        sum = sum + data;
    }
    console.log(sum);
    return sum;
}
var s = addNumber(10, 20, 30, 40);
console.log(s);
