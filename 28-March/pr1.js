// Write Node JS program to check weather the file extension is txt or not

var pm=require("path");

ext=pm.extname("D:/LJ/exam/xyz.html");

if(ext=="txt")
{
    console.log("It has txt extension");
}
else
{
    console.log("It has not txt extension");
    console.log("It has ",ext," extension")
}