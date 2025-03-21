// Read integer data from file and arrange that data in ascending order 

var fs=require("fs");

fs.writeFileSync("s1.txt","50 -1 99 100 120 0 56 78 99");
data=fs.readFileSync("s1.txt","utf-8");
spl=data.split(" ");
sor=spl.sort()
console.log(sor)