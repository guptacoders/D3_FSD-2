var url=require("url");

var adddr="http:///localhost:8080/default.html?year=2024&month=feb";
var q=url.parse(adddr,true);
console.log(q);