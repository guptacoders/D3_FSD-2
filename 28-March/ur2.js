// Write Node JS to fetch querystring from url and find that a person is eligible for voting or not 

var url=require("url");

var adddr="http:///localhost:8080/default.html?name=abc&age=19";

var q=url.parse(adddr,true);
console.log(q);

age=q.query.age;

if(age>18)
{
    console.log("Eligible for Voting");
}
else
{
    console.log("Not Eligible for Voting");
}
