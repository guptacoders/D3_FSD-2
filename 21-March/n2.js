// Write a node js script to copy contents of 1 file to another file  
// data should be fetched from source.txt and insert into destination.txt and display it to console from destination.txt

var fs=require("fs");

fs.writeFileSync("source.txt","Hi How are you");

datafetch=fs.readFileSync("source.txt","utf-8");

fs.writeFileSync("destination.txt",datafetch);


datafetch1=fs.readFileSync("destination.txt","utf-8");
console.log(datafetch1);