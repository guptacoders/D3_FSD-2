// Write Node JS Script to create a folder name dictionary in temp folder also crete file name "temp.txt" inside dictionary folder.
//now check if available physical memory  of the system is greater than 1 GB than write sufficient memory in the file else write insufficient in file

fs=require("fs");
os=require("os");

temp=os.tmpdir();

fs.mkdirSync(temp+"/dictionary");


mem=os.freemem()/(1024*1024*1024);

if(mem>1)
{
    fs.writeFileSync(temp+"/dictionary/temp.txt","Sufficient Memory");
}
else
{
    fs.writeFileSync(temp+"/dictionary/temp.txt","Insufficient Memory");
}
