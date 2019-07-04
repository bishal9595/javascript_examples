"use strict";
exports.__esModule = true;
var pro = [
    { proId: 101, proName: "abcd", proCost: 450.50 },
    { proId: 102, proName: "abc", proCost: 550.50 },
    { proId: 103, proName: "bcd", proCost: 650.50 },
    { proId: 104, proName: "abd", proCost: 750.50 }
];
pro.push({ proId: 105, proName: "a", proCost: 950.50 });
pro.splice(1, 1);
for (var _i = 0, pro_1 = pro; _i < pro_1.length; _i++) {
    var data = pro_1[_i];
    console.log(data.proId + " " + data.proName + " " + data.proCost);
}
var search = pro.filter(function (x) { return x.proId == 104; });
console.log(search);
