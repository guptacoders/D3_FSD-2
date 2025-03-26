// Write Node JS script to create folder named library at temp folder also create filename book.txt inside library folder.
// Now check platform is windows32 or not. Print message to file the "You are working on windows32 bit " else print message on console that
//  "You are not working on windows32 bit " 


fs=require("fs");
os=require("os");

temp=os.tmpdir();

fs.mkdirSync(temp+"/library");

pf=os.platform();
if(pf=="win32")
{
    fs.writeFileSync(temp+"/library/book.txt","You are working on windows32 bit.");
}
else
{
    console.log("You are not working on windows32 bit.")
}