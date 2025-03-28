// Write Node JS Script to print query string of URL in file using EcmaScript [ES6] callback


var url=require("url");
var fs=require("fs");

var adddr="http:///localhost:8080/default.html?name=abc&age=19";

var q=url.parse(adddr,true); // Here if false is written than we dont have to convert it to string

x=q.query;

data=JSON.stringify(x);

fs.writeFile("test.txt",data,(err)=>{
    console.log("Completed")
})
