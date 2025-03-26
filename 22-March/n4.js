//Save x1.txt file with data and do sum of it and store sum in x2.txt file and chnage name of x2.txt to sum.txt

var fs=require("fs");

// fs.mkdirSync("dict");
// fs.writeFileSync("dict/x1.txt","10 5 20 2")

rd=fs.readFileSync("dict/x1.txt","utf-8");

var numbers = rd.split(' ');

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
}

fs.writeFileSync("dict/x2.txt", sum.toString());

fs.renameSync("dict/x2.txt","dict/sum.txt");
