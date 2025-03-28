// To perform below tasks:
// 1. Write object in txt file "s2.txt"
// 2. Read data from same file and perform following tasks:
//  (i) Addition of a,b (ii)Substraction of 2nd element of c and b (must be +ve value),(iii) Multiplication of elements of c
// Add the Output of Addition,Sub,Multi below the object in "s2.txt" file 

const obj = {
    d: {
      a: 10,
      b: 20,
      c: [30, 10],
    },
  };
  
const fs = require("fs");
    
fs.writeFileSync("s2.txt", JSON.stringify(obj));

var data=fs.readFileSync("s2.txt","utf-8");
data2=JSON.parse(data);

add=data2.d.a+data2.d.b;
sub=data2.d.b-data2.d.c[1]
mul=data2.d.c[0]*data2.d.c[1];

fs.appendFileSync("s2.txt","\n Addition: "+add);
fs.appendFileSync("s2.txt","\n Subtraction: "+sub);
fs.appendFileSync("s2.txt","\n Multiplication: "+mul);
