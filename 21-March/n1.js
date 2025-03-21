var fs=require("fs");
fs.mkdirSync("node")

fs.writeFileSync("node/write.txt","Hello world")

fs.appendFileSync("node/write.txt","World")

 data=fs.readFileSync("node/write.txt","utf-8")
console.log(data)

// console.log(data.toString())

fs.renameSync("node/write.txt","node/rw.txt")

fs.unlinkSync("node/rw.txt")
fs.rmdirSync("node")