var pm=require("path");
path=pm.basename("D:/LJ/abc.html");
console.log(path);

path2=pm.dirname("D:/LJ/exam/xyz.txt");
console.log(path2);

ext=pm.extname("D:/LJ/exam/xyz.html");
console.log(ext);

path3=pm.parse("D:/LJ:/abc.html");
console.log(path3);
