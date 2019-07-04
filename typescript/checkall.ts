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

function addNumber(...num){
    var sum=0;
    for(let data of num)
    {    console.log(data);
        sum=sum+data;
    }
    console.log(sum);
    return sum;
}
var s=addNumber(10,20,30,40);
console.log(s);