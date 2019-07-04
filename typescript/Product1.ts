import {Product} from './Product'

var pro:Product[]=[
    {proId:101,proName:"abcd",proCost:450.50},
    {proId:102,proName:"abc",proCost:550.50},
    {proId:103,proName:"bcd",proCost:650.50},
    {proId:104,proName:"abd",proCost:750.50}];
    pro.push({proId:105,proName:"a",proCost:950.50});
    pro.splice(1,1);
    for(let data of pro)
    {
        console.log(data.proId+" "+data.proName+" "+data.proCost);
    }
    var search=pro.filter(x=>x.proId==104);
    console.log(search);